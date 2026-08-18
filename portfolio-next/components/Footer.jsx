"use client";
import { GithubLogo, InstagramLogo, LinkedinLogo, ArrowUp } from "@phosphor-icons/react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-8 inline-block">
          &lt;Welberth /&gt;
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/WelberthM" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
            <GithubLogo size={32} />
          </a>
          <a href="https://www.instagram.com/WelberthMorais" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300">
            <InstagramLogo size={32} />
          </a>
          <a href="https://www.linkedin.com/in/welberthalmeida/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300">
            <LinkedinLogo size={32} />
          </a>
        </div>
        
        <p className="text-gray-500 text-sm mb-8">
          © {new Date().getFullYear()} Welberth Almeida. Todos os direitos reservados.
        </p>

        <button 
          onClick={scrollToTop}
          className="inline-flex items-center justify-center p-3 bg-slate-800 text-gray-300 hover:text-white hover:bg-slate-700 rounded-full transition-colors"
          aria-label="Voltar ao Topo"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
}
