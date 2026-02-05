
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: { fr: "LaraShop - Plateforme E-commerce", en: "LaraShop - E-commerce Platform" },
    description: { 
      fr: "Une application e-commerce complète développée avec Laravel. Inclus la gestion du catalogue, un panier d'achat AJAX, et un système de paiement Stripe intégré. Dashboard admin pour la gestion des stocks et des commandes.", 
      en: "A full-scale e-commerce application built with Laravel. Includes catalog management, AJAX cart system, and Stripe payment integration. Admin dashboard for stock and order management." 
    },
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com",
    demo: "https://laravel.com"
  },
  {
    id: 2,
    title: { fr: "TaskFlow Manager - SaaS", en: "TaskFlow Manager - SaaS" },
    description: { 
      fr: "Outil de gestion de tâches d'équipe en temps réel. Utilise React pour l'interface dynamique et Node.js/Socket.io pour les mises à jour instantanées. Stockage des données flexible avec MongoDB.", 
      en: "Real-time team task management tool. Uses React for the dynamic UI and Node.js/Socket.io for instant updates. Flexible data storage with MongoDB." 
    },
    tech: ["React", "Node.js", "MongoDB", "JavaScript"],
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com",
    demo: "https://react.dev"
  },
  {
    id: 3,
    title: { fr: "DataSpy - Scraper Intelligent", en: "DataSpy - Intelligent Scraper" },
    description: { 
      fr: "Un puissant moteur de collecte de données automatisé conçu en Python. Interface utilisateur intuitive avec jQuery pour configurer les cibles de scraping et exporter les données en JSON/CSV.", 
      en: "A powerful automated data collection engine built in Python. Intuitive UI with jQuery to configure scraping targets and export data in JSON/CSV formats." 
    },
    tech: ["Python", "jQuery", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com",
    demo: "https://www.python.org"
  },
  {
    id: 4,
    title: { fr: "DevSync Cloud IDE", en: "DevSync Cloud IDE" },
    description: { 
      fr: "Environnement de développement collaboratif dans le cloud. Permet l'édition de code en direct à plusieurs. Architecture robuste sous React et TypeScript avec un backend Node.js scalable.", 
      en: "Collaborative development environment in the cloud. Allows multi-user live code editing. Robust architecture using React and TypeScript with a scalable Node.js backend." 
    },
    tech: ["React", "TypeScript", "Node.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com",
    demo: "https://typescriptlang.org"
  }
];

export const SKILLS: Skill[] = [
  // Maîtrise Très Bien (95-100%)
  { name: "HTML", category: "frontend", color: "#E34F26", icon: "html5", level: 100 },
  { name: "CSS", category: "frontend", color: "#1572B6", icon: "css3", level: 98 },
  { name: "PHP", category: "backend", color: "#777BB4", icon: "php", level: 98 },
  { name: "Bootstrap", category: "frontend", color: "#7952B3", icon: "bootstrap", level: 95 },
  { name: "jQuery", category: "frontend", color: "#0769AD", icon: "jquery", level: 95 },
  { name: "XML", category: "tool", color: "#FFA500", icon: "xml", level: 95 },
  { name: "C++", category: "backend", color: "#00599C", icon: "cplusplus", level: 95 },

  // Maîtrise Un Peu (60-75%)
  { name: "React", category: "frontend", color: "#61DAFB", icon: "react", level: 65 },
  { name: "Node.js", category: "backend", color: "#339933", icon: "nodedotjs", level: 68 },
  { name: "TypeScript", category: "frontend", color: "#3178C6", icon: "typescript", level: 60 },
  { name: "Tailwind", category: "frontend", color: "#06B6D4", icon: "tailwindcss", level: 72 },
  { name: "Python", category: "backend", color: "#3776AB", icon: "python", level: 65 },
  { name: "MySQL", category: "backend", color: "#4479A1", icon: "mysql", level: 75 },
  { name: "Laravel", category: "backend", color: "#FF2D20", icon: "laravel", level: 70 },
  { name: "Power BI", category: "tool", color: "#F2C811", icon: "powerbi", level: 60 },

  // Autres Outils
  { name: "Git", category: "tool", color: "#F05032", icon: "git", level: 88 },
  { name: "VS Code", category: "tool", color: "#007ACC", icon: "visualstudiocode", level: 95 }
];
