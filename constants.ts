
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: { fr: "LaraShop E-commerce", en: "LaraShop E-commerce" },
    description: { 
      fr: "Plateforme e-commerce complète avec gestion des stocks, panier et paiements sécurisés.", 
      en: "Full e-commerce platform with inventory management, cart system, and secure payments." 
    },
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    github: "#",
    demo: "https://example.com/larashop"
  },
  {
    id: 2,
    title: { fr: "TaskFlow Manager", en: "TaskFlow Manager" },
    description: { 
      fr: "Dashboard de gestion de projet en temps réel avec notifications et collaboration.", 
      en: "Real-time project management dashboard with notifications and collaboration features." 
    },
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    github: "#",
    demo: "https://example.com/taskflow"
  },
  {
    id: 3,
    title: { fr: "DataSpy Scraper", en: "DataSpy Scraper" },
    description: { 
      fr: "Outil d'automatisation de collecte de données web avec interface utilisateur interactive.", 
      en: "Web data collection automation tool with an interactive user interface." 
    },
    tech: ["Python", "Flask", "jQuery", "BeautifulSoup", "HTML/CSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    github: "#"
  },
  {
    id: 4,
    title: { fr: "SaaS DevSync", en: "SaaS DevSync" },
    description: { 
      fr: "Environnement de développement cloud partagé pour le pair programming.", 
      en: "Shared cloud development environment for pair programming sessions." 
    },
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Redis"],
    image: "https://images.unsplash.com/photo-1618401471353-b98aadebc258?auto=format&fit=crop&q=80&w=800",
    github: "#",
    demo: "https://example.com/devsync"
  }
];

export const SKILLS: Skill[] = [
  { name: "React", category: "frontend", color: "#61DAFB", icon: "react", level: 95 },
  { name: "JavaScript", category: "frontend", color: "#F7DF1E", icon: "javascript", level: 90 },
  { name: "TypeScript", category: "frontend", color: "#3178C6", icon: "typescript", level: 85 },
  { name: "HTML5", category: "frontend", color: "#E34F26", icon: "html5", level: 98 },
  { name: "CSS3", category: "frontend", color: "#1572B6", icon: "css3", level: 95 },
  { name: "Bootstrap", category: "frontend", color: "#7952B3", icon: "bootstrap", level: 88 },
  { name: "jQuery", category: "frontend", color: "#0769AD", icon: "jquery", level: 80 },
  { name: "Node.js", category: "backend", color: "#339933", icon: "nodedotjs", level: 85 },
  { name: "PHP", category: "backend", color: "#777BB4", icon: "php", level: 90 },
  { name: "Laravel", category: "backend", color: "#FF2D20", icon: "laravel", level: 92 },
  { name: "Python", category: "backend", color: "#3776AB", icon: "python", level: 75 },
  { name: "MySQL", category: "backend", color: "#4479A1", icon: "mysql", level: 88 },
  { name: "MongoDB", category: "backend", color: "#47A248", icon: "mongodb", level: 82 },
  { name: "VS Code", category: "tool", color: "#007ACC", icon: "visualstudiocode", level: 95 },
  { name: "Cursor", category: "tool", color: "#FFFFFF", icon: "cursor", level: 90 },
  { name: "Git", category: "tool", color: "#F05032", icon: "git", level: 88 },
];
