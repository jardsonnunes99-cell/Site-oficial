import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useParams, Link } from 'react-router-dom';
import { useOrders } from '@/store/OrderContext';

export function ConfirmationPage() {
  const { orderId } = useParams();
  const { getOrder } = useOrders();
  const order = getOrder(orderId || '');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl mb-4 text-green-400">Pedido Confirmado!</h1>
        {order && <p className="text-xl mb-8">Número do pedido: {order.orderNumber}</p>}
        <Link to="/" className="btn-cta">Voltar à loja</Link>
      </main>
      <Footer />
    </div>
  );
}
