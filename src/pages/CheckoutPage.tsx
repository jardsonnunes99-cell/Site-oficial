import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useCart } from '@/store/CartContext';
import { useOrders } from '@/store/OrderContext';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '@/utils/formatters';

export function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const { createOrder } = useOrders();
  const navigate = useNavigate();

  const handleConfirm = () => {
    const order = createOrder({
      items,
      customer: { name: 'Cliente Teste', cpf: '', email: 'teste@teste.com', whatsapp: '11999999999', address: { cep: '00000-000', street: 'Rua', number: '1', complement: '', neighborhood: 'Bairro', city: 'Cidade', state: 'SP' } },
      shipping: 15.00,
      paymentMethod: 'pix'
    });
    clearCart();
    navigate(`/confirmacao/${order.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl mb-8">Checkout</h1>
        <div className="card-premium">
          <h2 className="text-2xl mb-4">Resumo do Pedido</h2>
          <p className="mb-2">Total de itens: {items.length}</p>
          <p className="mb-2">Subtotal: {formatCurrency(subtotal)}</p>
          <p className="mb-4">Frete fixo: {formatCurrency(15.00)}</p>
          <p className="text-xl font-bold mb-8">Total: {formatCurrency(subtotal + 15.00)}</p>
          <button onClick={handleConfirm} className="btn-cta w-full">Confirmar Pedido (PIX)</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
