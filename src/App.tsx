import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Learn } from "@/components/landing/Learn";
import { Products } from "@/components/landing/Products";
import { Results } from "@/components/landing/Results";
import { Quotes } from "@/components/landing/Quotes";
import { OrderForm } from "@/components/landing/OrderForm";
import { Footer } from "@/components/landing/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <About />
      <Learn />
      <Products />
      <Results />
      <Quotes />
      <OrderForm />
      <Footer />
      <Toaster />
    </main>
  );
}

