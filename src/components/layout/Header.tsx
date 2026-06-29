import { Link } from 'react-router-dom';
import { useCart } from '@/store/CartContext';
import { ShoppingBag, Menu } from 'lucide-react';

export function Header() {
  const { totalItems } = useCart();
  return (
    <header className="sticky top-0 z-50 glass border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-heading text-cream font-bold">Diferenciado</Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-cream hover:text-gold transition-colors">Início</Link>
          <Link to="/carrinho" className="relative text-cream hover:text-gold transition-colors">
            <ShoppingBag />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-chocolate text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
