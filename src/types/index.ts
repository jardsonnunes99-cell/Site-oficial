export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Address {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface Customer {
  name: string;
  cpf: string;
  email: string;
  whatsapp: string;
  address: Address;
}

export type OrderStatus = 'pending' | 'confirmed' | 'preparing' | 'shipped' | 'delivered' | 'cancelled';
export type PaymentMethod = 'pix' | 'credit_card' | 'google_pay' | 'apple_pay';
export type PaymentStatus = 'pending' | 'approved' | 'rejected';

export interface Order {
  id: string;
  orderNumber: string;
  items: CartItem[];
  customer: Customer;
  subtotal: number;
  shipping: number;
  total: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  status: OrderStatus;
  trackingCode: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pending: 'Pendente',
  confirmed: 'Confirmado',
  preparing: 'Preparando',
  shipped: 'Enviado',
  delivered: 'Entregue',
  cancelled: 'Cancelado',
};

export const ORDER_STATUS_COLORS: Record<OrderStatus, string> = {
  pending: 'bg-yellow-500/20 text-yellow-400',
  confirmed: 'bg-blue-500/20 text-blue-400',
  preparing: 'bg-purple-500/20 text-purple-400',
  shipped: 'bg-cyan-500/20 text-cyan-400',
  delivered: 'bg-green-500/20 text-green-400',
  cancelled: 'bg-red-500/20 text-red-400',
};

export const PRODUCT_DATA: Product = {
  id: 'brigadeiro-gourmet-01',
  name: 'Brigadeiro Gourmet',
  description: 'Brigadeiro artesanal feito com ingredientes premium. Chocolate belga, leite condensado de alta qualidade e acabamento com toppings especiais. Cada unidade é preparada com carinho e perfeição.',
  price: 14.90,
  image: '/images/brigadeiro-product.png',
  category: 'brigadeiros',
};
