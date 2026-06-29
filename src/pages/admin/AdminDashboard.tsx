import { useNavigate } from 'react-router-dom';

export function AdminDashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('@Diferenciado:admin');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl">Painel Administrativo</h1>
        <button onClick={handleLogout} className="text-destructive">Sair</button>
      </div>
      <div className="card-premium">
        <p>Dashboard em construção...</p>
      </div>
    </div>
  );
}
