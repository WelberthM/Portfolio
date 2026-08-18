"use client";
import { motion } from "framer-motion";
import { EnvelopeSimple } from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-10 md:p-16 rounded-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pronto para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">começarmos?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Estou disponível para novos projetos e oportunidades profissionais. Me mande uma mensagem através das
            minhas redes ou do meu email.
          </p>

          <a
            href="mailto:Welberthmorais@hotmail.com"
            className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300 font-medium text-lg w-full sm:w-auto"
          >
            <EnvelopeSimple size={24} />
            <span>Diga Olá</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
