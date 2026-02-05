
import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { SKILLS } from '../constants';

interface SkillsProps {
  lang: Language;
}

const SkillIcon = ({ name, color }: { name: string; color: string }) => {
  const [imgSrc, setImgSrc] = useState<string>('');
  const [errorCount, setErrorCount] = useState(0);

  const slugMap: Record<string, string> = {
    "React": "react",
    "JavaScript": "javascript",
    "TypeScript": "typescript",
    "HTML": "html5",
    "CSS": "css3",
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
    "Git": "git",
    "C++": "cplusplus",
    "Power BI": "powerbi",
    "XML": "xml"
  };

  const slug = slugMap[name] || name.toLowerCase().replace(/\s+/g, '');
  const cleanColor = color.replace('#', '');
  
  useEffect(() => {
    setImgSrc(`https://cdn.simpleicons.org/${slug}/${cleanColor}`);
    setErrorCount(0);
  }, [slug, cleanColor]);

  const handleError = () => {
    if (errorCount === 0) {
      setImgSrc(`https://cdn.simpleicons.org/${slug}`);
      setErrorCount(1);
    } else if (errorCount === 1) {
      setImgSrc(`https://unpkg.com/simple-icons@latest/icons/${slug}.svg`);
      setErrorCount(2);
    } else {
      setImgSrc(`https://api.dicebear.com/7.x/initials/svg?seed=${name}&backgroundColor=3b82f6&fontSize=40`);
    }
  };

  return (
    <div className="w-10 h-10 flex items-center justify-center p-1 bg-white dark:bg-gray-800 rounded-xl shadow-inner">
      <img 
        src={imgSrc} 
        alt={name} 
        onError={handleError}
        className="max-w-full max-h-full group-hover:scale-110 transition-transform duration-300" 
        style={{ filter: errorCount > 0 ? 'none' : 'drop-shadow(0 0 2px rgba(0,0,0,0.1))' }}
      />
    </div>
  );
};

const getLevelLabel = (level: number, lang: Language) => {
  if (lang === 'fr') {
    if (level >= 95) return "Expert / Maîtrisé";
    if (level >= 85) return "Très Bien";
    if (level >= 70) return "Intermédiaire";
    return "En Apprentissage";
  } else {
    if (level >= 95) return "Expert / Mastered";
    if (level >= 85) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Learning";
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
        backend: "Backend & Système",
        tool: "Outils & Data"
      }
    },
    en: {
      title: "Skills",
      subtitle: "Technical Proficiency",
      proficiency: "Proficiency",
      categories: {
        frontend: "Frontend",
        backend: "Backend & Systems",
        tool: "Tools & Data"
      }
    }
  }[lang];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-gray-900/30 transition-colors duration-300 scroll-mt-20"
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
                      <div className="p-2">
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
