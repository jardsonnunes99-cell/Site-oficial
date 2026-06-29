import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "@/store/CartContext";
import { OrderProvider } from "@/store/OrderContext";
import { Toaster } from "sonner";
import "./styles.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <OrderProvider>
        <CartProvider>
          <App />
          <Toaster
            position="top-center"
            expand={true}
            richColors
            toastOptions={{
              style: {
                background: '#1A120D',
                border: '1px solid rgba(201, 169, 110, 0.2)',
                color: '#FFF8F0',
              },
            }}
          />
        </CartProvider>
      </OrderProvider>
    </BrowserRouter>
  </StrictMode>,
);
