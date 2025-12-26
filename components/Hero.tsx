
import React from 'react';
import { Language } from '../types';
import { ArrowRight, Code, Database, Layout, Sparkles } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const content = {
    fr: {
      greeting: "Salut, je suis",
      role: "Développeur Full Stack",
      desc: "Je conçois et développe des applications web robustes, scalables et esthétiques en utilisant les dernières technologies du marché.",
      cta: "Voir mes projets",
      badge: "Disponible pour de nouveaux défis"
    },
    en: {
      greeting: "Hi, I am",
      role: "Full Stack Developer",
      desc: "I design and develop robust, scalable, and beautiful web applications using the latest market technologies.",
      cta: "View My Projects",
      badge: "Open to new opportunities"
    }
  };

  const t = content[lang];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center space-x-2 p-1 mb-6 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-xs px-4 py-2 border border-blue-500/20">
              <Sparkles className="w-3 h-3" />
              <span>{t.badge}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
              {t.greeting} <br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
                Alex Dev.
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-400 mb-8 flex items-center">
              {t.role}
            </h2>
            
            <p className="max-w-xl text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
              {t.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="#projects" 
                onClick={(e) => handleScroll(e, '#projects')}
                className="group relative flex items-center justify-center px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black transition-all shadow-xl shadow-blue-500/25 active:scale-95"
              >
                {t.cta} 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex space-x-6 text-gray-400">
                <Layout className="w-6 h-6 hover:text-blue-500 transition-colors cursor-help" />
                <Code className="w-6 h-6 hover:text-blue-500 transition-colors cursor-help" />
                <Database className="w-6 h-6 hover:text-blue-500 transition-colors cursor-help" />
              </div>
            </div>
          </div>

          {/* Right Content - Visual Code Element */}
          <div className="hidden lg:block relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/30 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            
            {/* The Code Window */}
            <div className="relative glassmorphism rounded-3xl border border-white/10 shadow-2xl p-8 animate-float transform rotate-2 hover:rotate-0 transition-transform duration-700">
              {/* Window Controls */}
              <div className="flex space-x-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              
              {/* Code Snippet */}
              <div className="font-mono text-sm md:text-base leading-relaxed">
                <div className="flex space-x-2">
                  <span className="text-purple-400">const</span>
                  <span className="text-blue-400">developer</span>
                  <span className="text-white">=</span>
                  <span className="text-yellow-300">{'{'}</span>
                </div>
                <div className="pl-6 flex space-x-2">
                  <span className="text-gray-400">name:</span>
                  <span className="text-orange-400">'Alex'</span>,
                </div>
                <div className="pl-6 flex space-x-2">
                  <span className="text-gray-400">role:</span>
                  <span className="text-orange-400">'Full Stack'</span>,
                </div>
                <div className="pl-6 flex space-x-2">
                  <span className="text-gray-400">passion:</span>
                  <span className="text-orange-400">'Clean Code'</span>,
                </div>
                <div className="pl-6 flex space-x-2">
                  <span className="text-gray-400">coffee:</span>
                  <span className="text-blue-400">true</span>,
                </div>
                <div className="pl-6 flex space-x-2">
                  <span className="text-purple-400">build:</span>
                  <span className="text-white">()</span>
                  <span className="text-purple-400">=&gt;</span>
                  <span className="text-blue-400">innovation</span>
                  <span className="text-white">()</span>
                </div>
                <div className="text-yellow-300">{'}'};</div>
                
                <div className="mt-6">
                  <span className="text-blue-400">developer</span>
                  <span className="text-white">.</span>
                  <span className="text-blue-400">start</span>
                  <span className="text-white">();</span>
                  <span className="inline-block w-2 h-4 bg-blue-500 ml-1 animate-pulse align-middle"></span>
                </div>
              </div>
            </div>

            {/* Decorative Floating Elements */}
            <div className="absolute -top-10 -right-10 p-4 bg-white/5 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg -z-10 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-xs font-black text-blue-500 opacity-50">UTF-8</div>
            </div>
          </div>

        </div>
      </div>

      {/* Background decoration - subtle gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-500/5 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
};

export default Hero;
