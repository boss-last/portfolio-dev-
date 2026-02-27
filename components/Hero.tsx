
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
      role: "Développeur Fullstack / Data",
      desc: "Je conçois et développe des applications web performantes et des solutions d'analyse de données robustes, alliant design moderne et puissance de traitement.",
      cta: "Voir mes projets",
      badge: "Disponible pour de nouveaux défis"
    },
    en: {
      greeting: "Hi, I am",
      role: "Fullstack / Data Developer",
      desc: "I design and develop high-performance web applications and robust data analysis solutions, combining modern design with processing power.",
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
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-gray-900 dark:text-white leading-[1.1]">
              {t.greeting} <br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
                BAMBA AMARA <br className="hidden md:block" /> CHRISTIAN
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/30 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            
            <div className="relative glassmorphism rounded-3xl border border-white/10 shadow-2xl p-8 animate-float transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <div className="flex space-x-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              
              <div className="font-mono text-sm md:text-base leading-relaxed">
                <div className="flex space-x-2">
                  <span className="text-purple-400">const</span>
                  <span className="text-blue-400">developer</span>
                  <span className="text-white">=</span>
                  <span className="text-yellow-300">{'{'}</span>
                </div>
                <div className="pl-6 flex space-x-2">
                  <span className="text-gray-400">name:</span>
                  <span className="text-orange-400">'Bamba Amara'</span>,
                </div>
                <div className="pl-6 flex space-x-2">
                  <span className="text-gray-400">role:</span>
                  <span className="text-orange-400">'Fullstack / Data'</span>,
                </div>
                <div className="pl-6 flex space-x-2">
                  <span className="text-gray-400">focus:</span>
                  <span className="text-orange-400">'Web & Data'</span>,
                </div>
                <div className="pl-6 flex space-x-2">
                  <span className="text-gray-400">coffee:</span>
                  <span className="text-blue-400">true</span>,
                </div>
                <div className="pl-6 flex space-x-2">
                  <span className="text-purple-400">build:</span>
                  <span className="text-white">()</span>
                  <span className="text-purple-400">=&gt;</span>
                  <span className="text-blue-400">perfection</span>
                  <span className="text-white">()</span>
                </div>
                <div className="text-yellow-300">{'}'};</div>
                
                <div className="mt-6">
                  <span className="text-blue-400">developer</span>
                  <span className="text-white">.</span>
                  <span className="text-blue-400">deploy</span>
                  <span className="text-white">();</span>
                  <span className="inline-block w-2 h-4 bg-blue-500 ml-1 animate-pulse align-middle"></span>
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 p-4 bg-white/5 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg -z-10 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-xs font-black text-blue-500 opacity-50">UTF-8</div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-500/5 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
};

export default Hero;
