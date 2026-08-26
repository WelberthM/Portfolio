"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { EnvelopeSimple, PaperPlaneRight, CircleNotch, CheckCircle, WarningCircle } from "@phosphor-icons/react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const formspreeUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL;

      if (!formspreeUrl) {
        throw new Error("Formspree URL não configurada.");
      }

      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contato" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 md:p-12 rounded-3xl shadow-2xl">
          
          {/* Informações da Esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pronto para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">começarmos?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Estou sempre aberto a discutir desenvolvimento de produtos, parcerias e novas oportunidades profissionais. Preencha o formulário e entrarei em contato o mais rápido possível!
            </p>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center border border-slate-600">
                <EnvelopeSimple size={24} className="text-blue-400" />
              </div>
              <span className="text-lg">Welberthmorais@hotmail.com</span>
            </div>
          </motion.div>

          {/* Formulário da Direita */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="voce@exemplo.com"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como posso te ajudar?"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`group relative flex items-center justify-center gap-2 w-full px-8 py-4 ${
                  status === "error"
                    ? "bg-rose-600 shadow-rose-600/25 hover:shadow-rose-600/40"
                    : "bg-gradient-to-r from-blue-500 to-emerald-500 shadow-blue-500/25 hover:shadow-blue-500/40"
                } text-white rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300 font-bold text-lg disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed overflow-hidden mt-2`}
              >
                {status === "idle" && (
                  <>
                    <span>Enviar Mensagem</span>
                    <PaperPlaneRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                {status === "loading" && (
                  <>
                    <CircleNotch size={24} className="animate-spin" />
                    <span>Enviando...</span>
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle size={24} className="text-white" />
                    <span>Enviado com Sucesso!</span>
                  </>
                )}
                {status === "error" && (
                  <>
                    <WarningCircle size={24} className="text-white" />
                    <span>Erro ao enviar. Tente novamente!</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
