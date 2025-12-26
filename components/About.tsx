
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
      bio1: "En tant que développeur full-stack passionné, je m'épanouis en transformant des problèmes complexes en expériences numériques élégantes et interactives. Avec une base solide dans les technologies front-end et back-end, je donne vie aux idées, du concept au déploiement.",
      bio2: "Mon parcours dans le développement web est motivé par l'amour du code propre, du design centré sur l'utilisateur et de l'apprentissage continu. Je suis apte à travailler sur l'ensemble de la pile, de la création d'interfaces utilisateur réactives avec des frameworks modernes à l'architecture de logiques serveur et de bases de données évolutives."
    },
    en: {
      title: "About Me",
      subtitle: "Who am I?",
      bio1: "As a passionate full-stack developer, I thrive on turning complex problems into elegant and interactive digital experiences. With a solid foundation in both front-end and back-end technologies, I bring ideas to life from concept to deployment.",
      bio2: "My journey in web development is driven by a love for clean code, user-centered design, and continuous learning. I am proficient in working across the entire stack, from building responsive user interfaces with modern frameworks to architecting scalable server logic and databases."
    }
  }[lang];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Container */}
          <div className="relative group">
            <div className="relative z-10 aspect-[4/5] sm:aspect-square rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" 
                alt="Alex - Full Stack Developer" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Simple Overlay */}
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Subtle Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-blue-500/20 rounded-3xl -z-10 animate-float"></div>
          </div>
          
          {/* Content Container */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-3 flex items-center">
                <span className="w-8 h-px bg-blue-500 mr-3"></span>
                {t.title}
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent leading-tight">
                {t.subtitle}
              </h3>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                {t.bio1}
              </p>
              <p>
                {t.bio2}
              </p>
            </div>

            {/* Simple Tech Tags */}
            <div className="pt-4 flex flex-wrap gap-3">
               {['React', 'Node.js', 'Laravel', 'Python'].map((tech) => (
                 <span key={tech} className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-xs font-bold text-gray-500">
                   #{tech}
                 </span>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
