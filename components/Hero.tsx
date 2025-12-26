
import React from 'react';
import { Language } from '../types';
import { ArrowRight, Code, Database, Layout } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const content = {
    fr: {
      greeting: "Salut, je suis",
      role: "Développeur Full Stack",
      desc: "Je conçois et développe des applications web robustes, scalables et esthétiques en utilisant les dernières technologies du marché.",
      cta: "Voir mes projets"
    },
    en: {
      greeting: "Hi, I am",
      role: "Full Stack Developer",
      desc: "I design and develop robust, scalable, and beautiful web applications using the latest market technologies.",
      cta: "View My Projects"
    }
  };

  const t = content[lang];

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block p-1 mb-6 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-semibold text-sm px-4">
          {t.greeting}
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Alex <span className="text-blue-500">Dev</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-600 dark:text-gray-400 mb-8">
          {t.role}
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10">
          {t.desc}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#projects" 
            className="flex items-center justify-center px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all transform hover:scale-105"
          >
            {t.cta} <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <div className="flex space-x-6 text-gray-400 mt-6 sm:mt-0">
            <Layout className="w-6 h-6 hover:text-blue-500 cursor-help" />
            <Code className="w-6 h-6 hover:text-blue-500 cursor-help" />
            <Database className="w-6 h-6 hover:text-blue-500 cursor-help" />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20 dark:opacity-10 blur-3xl">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply animate-float" style={{animationDelay: '1s'}}></div>
      </div>
    </section>
  );
};

export default Hero;
