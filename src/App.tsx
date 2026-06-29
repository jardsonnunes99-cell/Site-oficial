import { Dashboard } from '@/components/dashboard/Dashboard';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <>
      <Dashboard />
      <Toaster position="top-center" expand={true} richColors />
    </>
  );
}
