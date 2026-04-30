
import React, { useMemo, useState } from 'react';
import { Language } from '../types';
import { PROJECTS, SKILLS } from '../constants';
import { ExternalLink, Github, Filter } from 'lucide-react';

interface ProjectsProps {
  lang: Language;
}

const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const t = {
    fr: {
      title: "Portfolio",
      subtitle: "Mes Projets Récents",
      view: "Détails",
      demo: "Démo Live",
      code: "Code Source",
      all: "Tous",
      filterBy: "Filtrer par"
    },
    en: {
      title: "Portfolio",
      subtitle: "My Recent Projects",
      view: "Details",
      demo: "Live Demo",
      code: "Source Code",
      all: "All",
      filterBy: "Filter by"
    }
  }[lang];

  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    PROJECTS.forEach(p => p.tech.forEach(t => techs.add(t)));
    return [lang === 'fr' ? 'Tous' : 'All', ...Array.from(techs).sort()];
  }, [lang]);

  const currentFilter = selectedFilter === 'Tous' || selectedFilter === 'All' ? 'All' : selectedFilter;

  const filteredProjects = useMemo(() => {
    if (currentFilter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.tech.includes(currentFilter));
  }, [currentFilter]);

  const getTechColor = (techName: string) => {
    const skill = SKILLS.find(s => s.name.toLowerCase() === techName.toLowerCase());
    return skill ? skill.color : '#3b82f6';
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-3">{t.title}</h2>
          <h3 className="text-4xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            {t.subtitle}
          </h3>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-center flex-wrap gap-2">
            <div className="flex items-center mr-2 text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-wider">
              <Filter className="w-3 h-3 mr-1" />
              {t.filterBy}
            </div>
            {allTechs.map((tech) => {
              const isAll = tech === 'Tous' || tech === 'All';
              const isActive = (isAll && currentFilter === 'All') || tech === currentFilter;
              
              return (
                <button
                  key={tech}
                  onClick={() => setSelectedFilter(tech)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 border ${
                    isActive 
                      ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105' 
                      : 'bg-transparent border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:border-blue-400 dark:hover:border-blue-600'
                  }`}
                >
                  {tech}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div 
              key={`${project.id}-${currentFilter}`} 
              className="group relative flex flex-col rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title[lang]} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => {
                    const color = getTechColor(tech);
                    return (
                      <span 
                        key={tech} 
                        className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border animate-tag-pop opacity-0 hover:scale-110 transition-transform cursor-default"
                        style={{ 
                          borderColor: `${color}40`,
                          backgroundColor: `${color}10`,
                          color: color,
                          animationDelay: `${idx * 100}ms`
                        }}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>

                <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors">
                  {project.title[lang]}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                  {project.description[lang]}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-bold text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    <span>{t.code}</span>
                  </a>
                  
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_self"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 group/btn"
                    >
                      {t.demo} 
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400 italic">
            {lang === 'fr' ? "Aucun projet ne correspond à ce filtre." : "No projects match this filter."}
          </div>
        )}
      </div>

    </section>
  );
};

export default Projects;
