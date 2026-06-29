import { createContext, useContext, useCallback, type ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { Order, OrderStatus, CartItem, Customer, PaymentMethod } from '@/types';
import { generateOrderNumber } from '@/utils/formatters';

interface CreateOrderParams {
  items: CartItem[];
  customer: Customer;
  shipping: number;
  paymentMethod: PaymentMethod;
}

interface OrderContextType {
  orders: Order[];
  createOrder: (params: CreateOrderParams) => Order;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  updateTrackingCode: (orderId: string, trackingCode: string) => void;
  cancelOrder: (orderId: string) => void;
  getOrder: (orderId: string) => Order | undefined;
  getOrdersByStatus: (status: OrderStatus) => Order[];
  getTodayOrders: () => Order[];
  getTotalRevenue: () => number;
  getAverageTicket: () => number;
}

const OrderContext = createContext<OrderContextType | null>(null);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useLocalStorage<Order[]>('@Diferenciado:orders', []);

  const createOrder = useCallback((params: CreateOrderParams): Order => {
    const subtotal = params.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    const order: Order = {
      id: crypto.randomUUID(),
      orderNumber: generateOrderNumber(),
      items: params.items,
      customer: params.customer,
      subtotal,
      shipping: params.shipping,
      total: subtotal + params.shipping,
      paymentMethod: params.paymentMethod,
      paymentStatus: params.paymentMethod === 'pix' ? 'pending' : 'approved',
      status: 'pending',
      trackingCode: '',
      notes: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setOrders((prev: Order[]) => [order, ...prev]);
    return order;
  }, [setOrders]);

  const updateOrderStatus = useCallback((orderId: string, status: OrderStatus) => {
    setOrders((prev: Order[]) =>
      prev.map((order) =>
        order.id === orderId
          ? { ...order, status, updatedAt: new Date().toISOString() }
          : order
      )
    );
  }, [setOrders]);

  const updateTrackingCode = useCallback((orderId: string, trackingCode: string) => {
    setOrders((prev: Order[]) =>
      prev.map((order) =>
        order.id === orderId
          ? { ...order, trackingCode, status: 'shipped' as OrderStatus, updatedAt: new Date().toISOString() }
          : order
      )
    );
  }, [setOrders]);

  const cancelOrder = useCallback((orderId: string) => {
    setOrders((prev: Order[]) =>
      prev.map((order) =>
        order.id === orderId
          ? { ...order, status: 'cancelled' as OrderStatus, updatedAt: new Date().toISOString() }
          : order
      )
    );
  }, [setOrders]);

  const getOrder = useCallback((orderId: string) => {
    return orders.find((order) => order.id === orderId);
  }, [orders]);

  const getOrdersByStatus = useCallback((status: OrderStatus) => {
    return orders.filter((order) => order.status === status);
  }, [orders]);

  const getTodayOrders = useCallback(() => {
    const today = new Date().toDateString();
    return orders.filter((order) => new Date(order.createdAt).toDateString() === today);
  }, [orders]);

  const getTotalRevenue = useCallback(() => {
    return orders
      .filter((order) => order.status !== 'cancelled')
      .reduce((sum, order) => sum + order.total, 0);
  }, [orders]);

  const getAverageTicket = useCallback(() => {
    const validOrders = orders.filter((order) => order.status !== 'cancelled');
    if (validOrders.length === 0) return 0;
    return validOrders.reduce((sum, order) => sum + order.total, 0) / validOrders.length;
  }, [orders]);

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
        updateOrderStatus,
        updateTrackingCode,
        cancelOrder,
        getOrder,
        getOrdersByStatus,
        getTodayOrders,
        getTotalRevenue,
        getAverageTicket,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
}
