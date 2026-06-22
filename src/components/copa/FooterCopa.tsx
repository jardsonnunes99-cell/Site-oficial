export function FooterCopa() {
  return (
    <footer className="relative py-12 border-t border-[rgba(255,255,255,0.05)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Pack Figurinhas Copa do Mundo. Todos os direitos
              reservados.
            </p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-600 text-xs">Produto digital · Entrega imediata</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
