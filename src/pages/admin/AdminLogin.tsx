import { useNavigate } from 'react-router-dom';

export function AdminLogin() {
  const navigate = useNavigate();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('@Diferenciado:admin', 'true');
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card-premium max-w-sm w-full text-center">
        <h1 className="text-2xl mb-6">Login Admin</h1>
        <form onSubmit={handleLogin}>
          <button type="submit" className="btn-cta w-full">Entrar</button>
        </form>
      </div>
    </div>
  );
}
