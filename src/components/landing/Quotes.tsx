import { motion } from "framer-motion";

const quotes = [
  "A maioria assiste. O 1% executa.",
  "Comunicação gera oportunidade.",
  "Quem vende bem, vive diferente.",
  "Seu resultado muda quando sua mentalidade muda."
];

export const Quotes = () => {
  return (
    <section className="py-24 px-4 bg-background border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gold-gradient-subtle opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center gap-16">
        {quotes.map((quote, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center w-full"
          >
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight tracking-tight">
              "{quote}"
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
