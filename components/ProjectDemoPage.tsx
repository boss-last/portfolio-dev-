import React, { useEffect, useMemo, useState } from 'react';
import { Language } from '../types';
import { PROJECTS, SKILLS } from '../constants';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

type DemoSlug =
  | 'ecommerce'
  | 'project-management'
  | 'laravel-portal'
  | 'superstore-analysis'
  | 'marketing-dashboard';

const slugToProjectId: Record<DemoSlug, number> = {
  ecommerce: 1,
  'project-management': 2,
  'laravel-portal': 3,
  'superstore-analysis': 4,
  'marketing-dashboard': 5,
};

const parseDemoSlugFromHash = (hash: string): DemoSlug | null => {
  // Expected: "#/demo/<slug>"
  const normalized = (hash || '').trim();
  const match = normalized.match(/^#\/demo\/([^/?#]+)$/);
  const slug = match?.[1] as DemoSlug | undefined;
  return slug && slug in slugToProjectId ? slug : null;
};

const getTechColor = (techName: string) => {
  const skill = SKILLS.find(s => s.name.toLowerCase() === techName.toLowerCase());
  return skill ? skill.color : '#3b82f6';
};

interface ProjectDemoPageProps {
  lang: Language;
}

const ProjectDemoPage: React.FC<ProjectDemoPageProps> = ({ lang }) => {
  const [slug, setSlug] = useState<DemoSlug | null>(() => parseDemoSlugFromHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setSlug(parseDemoSlugFromHash(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const project = useMemo(() => {
    if (!slug) return null;
    const id = slugToProjectId[slug];
    return PROJECTS.find(p => p.id === id) ?? null;
  }, [slug]);

  const t = {
    fr: {
      back: "Retour au portfolio",
      title: "Démo du projet",
      subtitle: "Aperçu, fonctionnalités, stack et liens",
      stack: "Stack",
      highlights: "Points clés",
      links: "Liens",
      code: "Code source",
      live: "Lien de démo",
      notFound: "Démo introuvable. Retour au portfolio."
    },
    en: {
      back: "Back to portfolio",
      title: "Project demo",
      subtitle: "Overview, features, stack and links",
      stack: "Stack",
      highlights: "Highlights",
      links: "Links",
      code: "Source code",
      live: "Demo link",
      notFound: "Demo not found. Back to portfolio."
    }
  }[lang];

  const highlights = useMemo(() => {
    if (!project) return [];
    const byId: Record<number, { fr: string[]; en: string[] }> = {
      1: {
        fr: ["Catalogue produits & panier", "Authentification et commandes", "API REST + base de données"],
        en: ["Product catalog & cart", "Auth and orders", "REST API + database"],
      },
      2: {
        fr: ["Suivi des tâches et projets", "Gestion d’équipe et permissions", "API + persistence MariaDB"],
        en: ["Project & task tracking", "Team & permissions", "API + MariaDB persistence"],
      },
      3: {
        fr: ["Portail sécurisé (auth/roles)", "CRUD + API REST", "Architecture Laravel (MVC)"],
        en: ["Secure portal (auth/roles)", "CRUD + REST API", "Laravel (MVC) architecture"],
      },
      4: {
        fr: ["Nettoyage des données", "Exploration (EDA) et tendances", "Notebook + scripts Python"],
        en: ["Data cleaning", "EDA and trends", "Notebook + Python scripts"],
      },
      5: {
        fr: ["KPI funnel & visualisations", "Modèle de données + mesures", "Dashboard prêt à présenter"],
        en: ["Funnel KPIs & visuals", "Data model + measures", "Presentation-ready dashboard"],
      },
    };
    return byId[project.id]?.[lang] ?? [];
  }, [project, lang]);

  if (!project) {
    return (
      <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/#projects"
            className="inline-flex items-center text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.back}
          </a>
          <div className="mt-10 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
            <div className="text-lg font-bold">{t.notFound}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <a
              href="/#projects"
              className="inline-flex items-center text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.back}
            </a>

            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-bold hover:bg-black transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  {t.code}
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="inline-flex items-center px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                >
                  {t.live}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              )}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-xl bg-white dark:bg-gray-900">
            <div className="relative aspect-[16/7] overflow-hidden">
              <img
                src={project.image}
                alt={project.title[lang]}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white">{project.title[lang]}</h1>
                <p className="mt-3 max-w-3xl text-sm sm:text-base text-gray-200/90">{project.description[lang]}</p>
              </div>
            </div>

            <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <div className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                    {t.highlights}
                  </div>
                  <ul className="space-y-3">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-600"></span>
                        <span className="text-sm leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                    {t.stack}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => {
                      const color = getTechColor(tech);
                      return (
                        <span
                          key={tech}
                          className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border"
                          style={{
                            borderColor: `${color}40`,
                            backgroundColor: `${color}10`,
                            color,
                          }}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                    {t.links}
                  </div>
                  <div className="space-y-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 hover:border-blue-500/40 transition-colors"
                      >
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-200">{t.code}</span>
                        <Github className="w-4 h-4 text-gray-500" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex items-center justify-between p-4 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      >
                        <span className="text-sm font-bold">{t.live}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDemoPage;

