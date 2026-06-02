import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Benefits } from "@/components/landing/Benefits";
import { Results } from "@/components/landing/Results";
import { Testimonials } from "@/components/landing/Testimonials";
import { OrderForm } from "@/components/landing/OrderForm";
import { Mentoria } from "@/components/landing/Mentoria";
import { Reseller } from "@/components/landing/Reseller";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

export default function App() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Results />
      <Testimonials />
      <OrderForm />
      <Mentoria />
      <Reseller />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
