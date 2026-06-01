import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { waLink } from "@/lib/whatsapp";
import { Send, ShoppingBag, CheckCircle } from "lucide-react";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo").max(80),
  telefone: z.string().trim().min(8, "Telefone inválido").max(20),
  cidade: z.string().trim().min(2, "Informe a cidade").max(60),
  endereco: z.string().trim().min(3, "Informe o endereço completo").max(200),
  evento: z.string().trim().min(2, "Informe o tipo de evento").max(60),
  quantidade: z.string().trim().min(1, "Informe a quantidade").max(20),
  data: z.string().trim().min(1, "Informe a data do evento"),
  observacoes: z.string().trim().max(500).optional().or(z.literal("")),
});

type Fields = z.infer<typeof schema>;

const initial: Fields = {
  nome: "",
  telefone: "",
  cidade: "",
  endereco: "",
  evento: "",
  quantidade: "",
  data: "",
  observacoes: "",
};

export function OrderForm() {
  const [values, setValues] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Fields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);

    if (!parsed.success) {
      const errs: Partial<Record<keyof Fields, string>> = {};
      parsed.error.issues.forEach((issue) => {
        errs[issue.path[0] as keyof Fields] = issue.message;
      });
      setErrors(errs);
      return;
    }

    setErrors({});
    const d = parsed.data;

    // ── Formata mensagem completa para WhatsApp ──
    const msg =
      `🎉 *Nova Encomenda — Diferenciado*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Nome:* ${d.nome}\n` +
      `📱 *Telefone:* ${d.telefone}\n` +
      `📍 *Cidade:* ${d.cidade}\n` +
      `🏠 *Endereço:* ${d.endereco}\n` +
      `🎊 *Tipo de Evento:* ${d.evento}\n` +
      `📦 *Quantidade:* ${d.quantidade}\n` +
      `📅 *Data do Evento:* ${d.data}\n` +
      `📝 *Observações:* ${d.observacoes || "—"}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `_Mensagem enviada pelo site Diferenciado_`;

    window.open(waLink(msg), "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const inputClass = (field: keyof Fields) =>
    `input-premium ${errors[field] ? "border-destructive/60 focus:border-destructive" : ""}`;

  return (
    <section id="encomendas" className="relative py-32 px-6 section-divider overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-primary/4 blur-[200px]" />
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="section-tag justify-center">
            <ShoppingBag className="w-3 h-3" />
            Encomendas Premium
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Faça sua{" "}
            <span className="text-gradient-gold">encomenda</span>.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Preencha o formulário abaixo. Assim que enviar, você será
            direcionado ao WhatsApp com todas as informações preenchidas
            automaticamente para facilitar o atendimento.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          noValidate
          className="glass-premium rounded-3xl p-6 sm:p-10 shadow-gold border-gold"
        >
          {/* Top accent */}
          <div className="neon-line-gold mb-8" />

          <div className="grid sm:grid-cols-2 gap-5">
            {/* Nome */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                Nome Completo *
              </label>
              <input
                name="nome"
                type="text"
                placeholder="Seu nome completo"
                value={values.nome}
                onChange={handle}
                className={inputClass("nome")}
              />
              {errors.nome && (
                <p className="text-xs text-destructive mt-1.5 flex items-center gap-1">
                  ⚠ {errors.nome}
                </p>
              )}
            </div>

            {/* Telefone */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                Telefone / WhatsApp *
              </label>
              <input
                name="telefone"
                type="tel"
                placeholder="(83) 99999-9999"
                value={values.telefone}
                onChange={handle}
                className={inputClass("telefone")}
              />
              {errors.telefone && (
                <p className="text-xs text-destructive mt-1.5">⚠ {errors.telefone}</p>
              )}
            </div>

            {/* Cidade */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                Cidade *
              </label>
              <input
                name="cidade"
                type="text"
                placeholder="Ex: João Pessoa, Recife..."
                value={values.cidade}
                onChange={handle}
                className={inputClass("cidade")}
              />
              {errors.cidade && (
                <p className="text-xs text-destructive mt-1.5">⚠ {errors.cidade}</p>
              )}
            </div>

            {/* Tipo de Evento */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                Tipo de Evento *
              </label>
              <input
                name="evento"
                type="text"
                placeholder="Aniversário, casamento, formatura..."
                value={values.evento}
                onChange={handle}
                className={inputClass("evento")}
              />
              {errors.evento && (
                <p className="text-xs text-destructive mt-1.5">⚠ {errors.evento}</p>
              )}
            </div>

            {/* Endereço */}
            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                Endereço do Evento *
              </label>
              <input
                name="endereco"
                type="text"
                placeholder="Rua, número, bairro, cidade..."
                value={values.endereco}
                onChange={handle}
                className={inputClass("endereco")}
              />
              {errors.endereco && (
                <p className="text-xs text-destructive mt-1.5">⚠ {errors.endereco}</p>
              )}
            </div>

            {/* Quantidade */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                Quantidade Desejada *
              </label>
              <input
                name="quantidade"
                type="text"
                placeholder="Ex: 100 unidades, 200 brigadeiros..."
                value={values.quantidade}
                onChange={handle}
                className={inputClass("quantidade")}
              />
              {errors.quantidade && (
                <p className="text-xs text-destructive mt-1.5">⚠ {errors.quantidade}</p>
              )}
            </div>

            {/* Data */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                Data do Evento *
              </label>
              <input
                name="data"
                type="date"
                value={values.data}
                onChange={handle}
                className={inputClass("data")}
              />
              {errors.data && (
                <p className="text-xs text-destructive mt-1.5">⚠ {errors.data}</p>
              )}
            </div>

            {/* Observações */}
            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                Observações
              </label>
              <textarea
                name="observacoes"
                rows={4}
                placeholder="Sabores preferidos, decoração especial, restrições alimentares, outros detalhes..."
                value={values.observacoes}
                onChange={handle}
                className={`${inputClass("observacoes")} resize-none`}
              />
            </div>
          </div>

          {/* Bottom accent */}
          <div className="neon-line-gold mt-8 mb-6" />

          {/* Submit */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="submit"
              id="btn-solicitar-encomenda"
              className="btn-gold group w-full sm:w-auto"
            >
              {sent ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Enviado! Redirecionando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Solicitar Encomenda via WhatsApp
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            Ao enviar, você será direcionado ao WhatsApp com a mensagem completa preenchida automaticamente.
          </p>
        </motion.form>
      </div>
    </section>
  );
}