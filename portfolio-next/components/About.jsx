"use client";
import { motion } from "framer-motion";
import { FileHtml, FileCss, FileJs, Coffee, Atom, RocketLaunch, ShareNetwork, GitBranch, FileSql } from "@phosphor-icons/react";

export default function About() {
  const skills = [
    { name: "HTML5", icon: <FileHtml size={32} /> },
    { name: "CSS3", icon: <FileCss size={32} /> },
    { name: "JavaScript", icon: <FileJs size={32} /> },
    { name: "React", icon: <Atom size={32} /> },
    { name: "Next.js", icon: <RocketLaunch size={32} /> },
    { name: "Java", icon: <Coffee size={32} /> },
    { name: "SQL", icon: <FileSql size={32} /> },
    { name: "Git & GitHub", icon: <GitBranch size={32} /> },
    { name: "n8n", icon: <ShareNetwork size={32} /> },
  ];

  return (
    <section id="sobre" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Mim</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            className="lg:w-1/2 space-y-6 text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Sempre buscando construir interfaces intuitivas e dinâmicas que proporcionam a melhor
              experiência para os usuários. Com foco em tecnologias front-end, transformo designs
              complexos em código limpo, semântico e altamente performático.
            </p>
            <p>
              Gosto de estar sempre atualizado com as tendências do mercado, principalmente com assuntos
              sobre IA e Machine Learning.
            </p>
          </motion.div>

          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 transition-colors group cursor-pointer"
                >
                  <div className="text-gray-400 group-hover:text-blue-400 transition-colors mb-2">
                    {skill.icon}
                  </div>
                  <span className="text-sm text-gray-300 font-medium group-hover:text-white">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
