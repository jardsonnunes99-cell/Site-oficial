import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useCart } from '@/store/CartContext';
import { PRODUCT_DATA } from '@/types';
import { formatCurrency } from '@/utils/formatters';
import { toast } from 'sonner';

export function HomePage() {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(PRODUCT_DATA, 1);
    toast.success('Adicionado ao carrinho!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl mb-6 text-gradient-gold">Brigadeiros Gourmet Artesanais</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feitos com ingredientes premium e muito amor. Cada brigadeiro é uma experiência única de sabor.
          </p>
        </div>
        
        <div className="max-w-md mx-auto card-premium text-center">
          <img src={PRODUCT_DATA.image} alt={PRODUCT_DATA.name} className="w-full rounded-lg mb-6" />
          <h2 className="text-2xl mb-2">{PRODUCT_DATA.name}</h2>
          <p className="text-muted-foreground mb-4">{PRODUCT_DATA.description}</p>
          <p className="text-3xl text-gold font-bold mb-6">{formatCurrency(PRODUCT_DATA.price)}</p>
          <button onClick={handleAdd} className="btn-cta w-full">Adicionar ao Carrinho</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
