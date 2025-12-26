
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
      bio1: "Développeur Full Stack passionné par l'architecture logicielle et l'expérience utilisateur. Avec une solide base en développement front-end et back-end, j'aime transformer des idées complexes en solutions simples et élégantes.",
      bio2: "Mon parcours m'a permis de travailler sur une grande variété de projets, des sites e-commerce aux tableaux de bord temps réel, en passant par des outils d'automatisation.",
      stats: [
        { label: "Années d'Expérience", value: "5+" },
        { label: "Projets Terminés", value: "50+" },
        { label: "Clients Satisfaits", value: "30+" }
      ]
    },
    en: {
      title: "About Me",
      subtitle: "Who am I?",
      bio1: "Full Stack Developer passionate about software architecture and user experience. With a solid foundation in front-end and back-end development, I enjoy turning complex ideas into simple and elegant solutions.",
      bio2: "My journey has allowed me to work on a wide variety of projects, from e-commerce sites to real-time dashboards and automation tools.",
      stats: [
        { label: "Years Experience", value: "5+" },
        { label: "Projects Completed", value: "50+" },
        { label: "Happy Clients", value: "30+" }
      ]
    }
  }[lang];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" 
                alt="Developer Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-3xl -z-10 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-teal-400 rounded-3xl -z-10"></div>
          </div>
          
          <div>
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-3">{t.title}</h2>
            <h3 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              {t.subtitle}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {t.bio1}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              {t.bio2}
            </p>
            
            <div className="grid grid-cols-3 gap-8 border-t border-gray-100 dark:border-gray-800 pt-8">
              {t.stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-black text-blue-500 mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
