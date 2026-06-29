import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { CartPage } from "@/pages/CartPage";
import { CheckoutPage } from "@/pages/CheckoutPage";
import { PaymentPage } from "@/pages/PaymentPage";
import { ConfirmationPage } from "@/pages/ConfirmationPage";
import { AdminLogin } from "@/pages/admin/AdminLogin";
import { AdminDashboard } from "@/pages/admin/AdminDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/carrinho" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/pagamento" element={<PaymentPage />} />
      <Route path="/confirmacao/:orderId" element={<ConfirmationPage />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
