"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

export default function Hero() {
  const codeParticles = ["</>", "{ }", "()", "#", "/* */", "< >", ";"];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {codeParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-500/20 font-mono text-2xl font-bold"
            initial={{ 
              opacity: 0, 
              y: Math.random() * 100, 
              x: `${Math.random() * 100}vw` 
            }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              y: [null, Math.random() * -200 - 100],
              x: [null, Math.random() * 200 - 100],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {particle}
          </motion.div>
        ))}
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p 
            className="text-blue-400 font-medium text-xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Olá, me chamo <span className="text-white font-semibold">Welberth Almeida</span> 👋
          </motion.p>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Eleve seu negócio digital a outro nível com um{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Front-end de qualidade!
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Desenvolvedor Front-end com especialidade em React, CSS e JavaScript.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a 
              href="#projetos" 
              className="group flex items-center justify-center space-x-2 px-8 py-4 bg-transparent border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto font-medium"
            >
              <span>Ver Projetos</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contato" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto font-medium"
            >
              Vamos conversar
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
