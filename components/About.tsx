
import React from 'react';
import { Language } from '../types';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = {
    fr: {
      title: "À Propos",
      subtitle: "Qui suis-je ?",
      bio1: "Développeur Fullstack / Data passionné par la création de solutions web complètes et l'exploitation intelligente des données. Je maîtrise l'ensemble du cycle de développement, du front-end interactif au back-end robuste.",
      bio2: "Avec une expertise variée allant de React et Next.js à Python, Java et Laravel, je construis des applications scalables et des architectures de données performantes. Mon approche combine rigueur technique et vision produit pour transformer des concepts complexes en réalités numériques tangibles."
    },
    en: {
      title: "About Me",
      subtitle: "Who am I?",
      bio1: "Fullstack / Data Developer passionate about creating complete web solutions and intelligent data exploitation. I master the entire development cycle, from interactive front-end to robust back-end.",
      bio2: "With varied expertise ranging from React and Next.js to Python, Java, and Laravel, I build scalable applications and high-performance data architectures. My approach combines technical rigor and product vision to transform complex concepts into tangible digital realities."
    }
  }[lang];

  // URL d'image haute disponibilité (Unsplash)
  // Conseil : Pour utiliser votre propre photo, hébergez-la sur un site comme Imgur ou utilisez votre lien GitHub/LinkedIn direct
  const profileImageUrl = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop";

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Container */}
          <div className="relative group flex justify-center lg:justify-start">
            <div className="relative z-10 w-full max-w-[400px] aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.02] border-4 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-800">
              <img 
                src={profileImageUrl}
                alt="Bamba Amara Christian" 
                className="w-full h-full object-cover transition-all duration-700"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Bamba&backgroundColor=0d8abc";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-blue-500/20 rounded-[4rem] -z-10 rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
          </div>
          
          {/* Content Container */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-3 flex items-center">
                <span className="w-8 h-px bg-blue-500 mr-3"></span>
                {t.title}
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent leading-tight">
                {t.subtitle}
              </h3>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p className="font-medium text-gray-800 dark:text-gray-200">
                Bonjour, je suis Bamba Amara Christian. {t.bio1}
              </p>
              <p>
                {t.bio2}
              </p>
            </div>

            {/* Tech Stack Highlights */}
            <div className="pt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">Fullstack Web</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">React / Next.js / Node.js / Laravel</p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                <p className="text-[10px] font-black text-teal-500 uppercase tracking-widest mb-1">Data & Systems</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Python / SQL / Java / MongoDB</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
