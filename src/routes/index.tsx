import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Diferenciado — Produtos Artesanais Premium | Mentoria de Vendas e Revenda",
      },
      {
        name: "description",
        content:
          "Aprenda a vender nas ruas, perca a timidez e lucre com brigadeiros artesanais premium. Mentoria, encomendas para eventos e programa de revenda em toda a Paraíba e Pernambuco.",
      },
      {
        name: "keywords",
        content:
          "brigadeiro artesanal, mentoria de vendas, aprender a vender, encomendas para festas, revenda de doces, Paraíba, Pernambuco, João Pessoa, Recife",
      },
      { property: "og:title", content: "Diferenciado — Brigadeiros Premium & Mentoria de Vendas" },
      {
        property: "og:description",
        content:
          "Do brigadeiro à mentalidade: aprenda a vender, perca o medo e construa uma renda real. Atendemos toda a Paraíba e Pernambuco.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Diferenciado" },
      { name: "theme-color", content: "#0d0b08" },
    ],
  }),
});

function Index() {
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
    </main>
  );
}
