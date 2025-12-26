
import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { SKILLS } from '../constants';

interface SkillsProps {
  lang: Language;
}

const SkillIcon = ({ name, color }: { name: string; color: string }) => {
  const slugMap: Record<string, string> = {
    "React": "react",
    "JavaScript": "javascript",
    "TypeScript": "typescript",
    "HTML5": "html5",
    "CSS3": "css3",
    "Bootstrap": "bootstrap",
    "jQuery": "jquery",
    "Node.js": "nodedotjs",
    "PHP": "php",
    "Laravel": "laravel",
    "Python": "python",
    "MySQL": "mysql",
    "MongoDB": "mongodb",
    "VS Code": "visualstudiocode",
    "Cursor": "cursor",
    "Git": "git"
  };

  const slug = slugMap[name] || name.toLowerCase().replace(/\s+/g, '');
  const iconUrl = `https://cdn.simpleicons.org/${slug}/${color.replace('#', '')}`;

  return (
    <img 
      src={iconUrl} 
      alt={name} 
      className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300" 
      loading="lazy"
    />
  );
};

const getLevelLabel = (level: number, lang: Language) => {
  if (lang === 'fr') {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Avancé";
    if (level >= 50) return "Intermédiaire";
    return "Débutant";
  } else {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 50) return "Intermediate";
    return "Beginner";
  }
};

const Skills: React.FC<SkillsProps> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const t = {
    fr: {
      title: "Compétences",
      subtitle: "Maîtrise Technique",
      proficiency: "Maîtrise",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tool: "Outils & Dev"
      }
    },
    en: {
      title: "Skills",
      subtitle: "Technical Proficiency",
      proficiency: "Proficiency",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tool: "Tools & Dev"
      }
    }
  }[lang];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-gray-900/30 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-3">{t.title}</h2>
          <h3 className="text-4xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            {t.subtitle}
          </h3>
        </div>

        <div className="space-y-16">
          {(['frontend', 'backend', 'tool'] as const).map(cat => (
            <div key={cat} className="space-y-8">
              <div className="flex items-center space-x-6">
                <h4 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest whitespace-nowrap">
                  {t.categories[cat]}
                </h4>
                <div className="h-px w-full bg-gray-200 dark:bg-gray-800"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {SKILLS.filter(s => s.category === cat).map(skill => (
                  <div 
                    key={skill.name}
                    className="group relative p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
                        <SkillIcon name={skill.name} color={skill.color} />
                      </div>
                      <div className="text-right">
                        <span className="block text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-bold uppercase text-gray-400 dark:text-gray-500">
                          {getLevelLabel(skill.level, lang)}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
                        <span>{t.proficiency}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%', 
                            backgroundColor: skill.color,
                            boxShadow: `0 0 12px ${skill.color}50`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
