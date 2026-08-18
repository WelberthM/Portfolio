"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filters = ["Todos", "Design", "Programação"];

  const projects = [
    {
      id: 1,
      title: "Jogo Detona Ralph",
      description: "Explorando o JavaScript criamos um joguinho da memória com o Detona Ralph.",
      image: "https://cinema-em-cena.nyc3.cdn.digitaloceanspaces.com/reviews/152/9OGpoSaGGwbWSFQVFaVGakLyaoK.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Programação",
      github: "https://github.com/WelberthM/DetonaRalph",
      live: "https://welberthm.github.io/DetonaRalph/",
    }
    // Add future projects here
  ];

  return (
    <section id="projetos" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Feitos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Recentes</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Aqui estão alguns dos projetos em que venho trabalhando ou estudando.
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === filter
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                : "bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects
            .filter((project) => activeFilter === "Todos" || project.category === activeFilter)
            .map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </motion.div>
      </div>
    </section>
  );
}
