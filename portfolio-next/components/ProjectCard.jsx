import { motion } from "framer-motion";
import { GithubLogo, Link as LinkIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-colors group flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-transparent transition-colors z-10" />
        {/* Usando next/image para otimização */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-blue-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 flex-grow mb-6">{project.description}</p>

        <div className="flex gap-4 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
          >
            <GithubLogo size={20} /> Repo
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors"
          >
            <LinkIcon size={20} /> Live Preview
          </a>
        </div>
      </div>
    </motion.div>
  );
}
