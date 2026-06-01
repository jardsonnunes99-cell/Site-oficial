import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

const testimonials = [
  {
    name: "Juliana Ribeiro",
    city: "João Pessoa — PB",
    role: "Aluna da Mentoria",
    initials: "JR",
    rating: 5,
    text: "Em 30 dias meu faturamento triplicou. A mentoria me deu confiança para abordar qualquer cliente sem medo. Hoje vendo todos os dias e ainda tenho tempo para a família.",
    highlight: "faturamento triplicou em 30 dias",
  },
  {
    name: "Carlos Andrade",
    city: "Recife — PE",
    role: "Parceiro Revendedor",
    initials: "CA",
    rating: 5,
    text: "Encontrei na revenda uma renda extra que virou minha renda principal. Suporte impecável, produtos que se vendem sozinhos e margem real em cada venda. Melhor decisão da minha vida.",
    highlight: "renda extra que virou principal",
  },
  {
    name: "Patrícia Soares",
    city: "Campina Grande — PB",
    role: "Encomenda — Aniversário 15 anos",
    initials: "PS",
    rating: 5,
    text: "Encomendei para os 15 anos da minha filha. Pontualidade impecável, qualidade que superou todas as expectativas e um carinho que emocionou todos os convidados. Voltarei com certeza!",
    highlight: "qualidade que superou as expectativas",
  },
  {
    name: "Renato Lima",
    city: "Caruaru — PE",
    role: "Aluno da Mentoria",
    initials: "RL",
    rating: 5,
    text: "Eu travava na hora de falar com qualquer cliente. Hoje fecho vendas com naturalidade e confiança que nunca imaginei ter. Mudou minha vida e a do meu negócio completamente.",
    highlight: "mudou minha vida completamente",
  },
  {
    name: "Marina Costa",
    city: "João Pessoa — PB",
    role: "Cliente Corporativo",
    initials: "MC",
    rating: 5,
    text: "Atendimento de altíssimo nível, produtos sofisticados e entrega no prazo. Já é a terceira vez que contratamos para eventos da empresa e sempre superam nossas expectativas.",
    highlight: "terceira vez contratando para a empresa",
  },
];

function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div
      className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold text-primary-foreground shrink-0 ${color}`}
      style={{ boxShadow: "0 4px 16px oklch(0.80 0.145 72 / 0.25)" }}
    >
      {initials}
    </div>
  );
}

const avatarColors = [
  "bg-gradient-to-br from-amber-500 to-yellow-600",
  "bg-gradient-to-br from-yellow-500 to-amber-700",
  "bg-gradient-to-br from-orange-400 to-amber-600",
  "bg-gradient-to-br from-amber-400 to-orange-600",
  "bg-gradient-to-br from-yellow-600 to-amber-500",
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (next: number) => {
      setDir(next > active ? 1 : -1);
      setActive((next + testimonials.length) % testimonials.length);
    },
    [active]
  );

  const prev = () => go(active - 1);
  const next = () => go(active + 1);

  useEffect(() => {
    const t = setInterval(() => go(active + 1), 6000);
    return () => clearInterval(t);
  }, [active, go]);

  const t = testimonials[active];

  const variants: Variants = {
    enter: (d: number) => ({
      x: d > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
    exit: (d: number) => ({
      x: d > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.35, ease: [0.7, 0, 0.84, 0] as [number, number, number, number] },
    }),
  };

  return (
    <section className="relative py-32 px-6 section-divider overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="section-tag justify-center">
            <span className="w-4 h-px bg-primary inline-block" />
            Depoimentos
            <span className="w-4 h-px bg-primary inline-block" />
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Quem viveu,{" "}
            <span className="text-gradient-gold">recomenda</span>.
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="testimonial-card"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-8">
                <Quote className="w-10 h-10 text-primary/10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Highlighted quote */}
              <p className="font-display text-xl sm:text-2xl text-foreground/90 leading-relaxed mb-3 italic">
                "{t.text}"
              </p>

              {/* Highlight badge */}
              <div className="mb-8">
                <span className="badge-premium">
                  ✓ {t.highlight}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Avatar initials={t.initials} color={avatarColors[active % avatarColors.length]} />
                <div>
                  <div className="font-semibold text-foreground text-base">{t.name}</div>
                  <div className="text-xs text-primary uppercase tracking-wider mt-0.5">
                    {t.role}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 inline-block" />
                    {t.city}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="w-11 h-11 rounded-full glass border-gold flex items-center justify-center hover:bg-white/5 hover:border-primary/50 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Depoimento ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-8 h-2 bg-gold-gradient"
                      : "w-2 h-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Próximo"
              className="w-11 h-11 rounded-full glass border-gold flex items-center justify-center hover:bg-white/5 hover:border-primary/50 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}