import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function PaymentPage() {
  const navigate = useNavigate();
  useEffect(() => { navigate('/checkout'); }, [navigate]);
  return null;
}
