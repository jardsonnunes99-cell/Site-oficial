import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useCart } from '@/store/CartContext';
import { formatCurrency } from '@/utils/formatters';
import { Link } from 'react-router-dom';

export function CartPage() {
  const { items, subtotal, removeItem } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl mb-8">Meu Carrinho</h1>
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-6">Seu carrinho está vazio</p>
            <Link to="/" className="btn-cta">Voltar para a loja</Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              {items.map(item => (
                <div key={item.product.id} className="card-premium flex items-center justify-between">
                  <div>
                    <h3 className="text-xl">{item.product.name}</h3>
                    <p className="text-muted-foreground">Qtd: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{formatCurrency(item.product.price * item.quantity)}</p>
                    <button onClick={() => removeItem(item.product.id)} className="text-destructive text-sm mt-2">Remover</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="card-premium h-fit">
              <h3 className="text-xl mb-4">Resumo</h3>
              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <Link to="/checkout" className="btn-cta w-full text-center">Finalizar Pedido</Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
