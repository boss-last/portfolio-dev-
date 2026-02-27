
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: { fr: "Plateforme SaaS Next.js", en: "Next.js SaaS Platform" },
    description: { 
      fr: "Une application SaaS moderne utilisant Next.js pour le SEO et la performance, avec une base de données MongoDB et une interface stylisée avec Tailwind CSS.", 
      en: "A modern SaaS application using Next.js for SEO and performance, with a MongoDB database and a UI styled with Tailwind CSS." 
    },
    tech: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "MongoDB"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com",
    demo: "#"
  },
  {
    id: 2,
    title: { fr: "E-commerce Laravel Expert", en: "Laravel E-commerce Expert" },
    description: { 
      fr: "Système de vente en ligne complet développé avec Laravel et PHP. Interface responsive avec Bootstrap et interactions dynamiques via jQuery.", 
      en: "Complete online sales system developed with Laravel and PHP. Responsive interface with Bootstrap and dynamic interactions via jQuery." 
    },
    tech: ["Laravel", "PHP", "SQL", "Bootstrap", "jQuery"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com",
    demo: "#"
  },
  {
    id: 3,
    title: { fr: "Système d'Analyse de Données", en: "Data Analysis System" },
    description: { 
      fr: "Application de traitement de données massives combinant Java pour la robustesse du backend et Python pour l'analyse statistique avancée et le machine learning.", 
      en: "Massive data processing application combining Java for backend robustness and Python for advanced statistical analysis and machine learning." 
    },
    tech: ["Java", "Python", "SQL", "Node.js", "Git"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com",
    demo: "#"
  },
  {
    id: 4,
    title: { fr: "Real-time Dev Tool", en: "Real-time Dev Tool" },
    description: { 
      fr: "Outil de collaboration en temps réel pour développeurs utilisant Node.js et TypeScript. Intégration fluide avec Git et GitHub pour le suivi des versions.", 
      en: "Real-time collaboration tool for developers using Node.js and TypeScript. Seamless integration with Git and GitHub for version tracking." 
    },
    tech: ["Node.js", "TypeScript", "JavaScript", "Git", "GitHub"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com",
    demo: "#"
  },
  {
    id: 5,
    title: { fr: "Passerelle de Paiement Stripe", en: "Stripe Payment Gateway" },
    description: { 
      fr: "Intégration complète d'une passerelle de paiement sécurisée utilisant Stripe, PHP et SQL. Interface utilisateur optimisée avec HTML5 et CSS3.", 
      en: "Complete integration of a secure payment gateway using Stripe, PHP, and SQL. User interface optimized with HTML5 and CSS3." 
    },
    tech: ["PHP", "SQL", "HTML5", "CSS3", "Windsurf"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com",
    demo: "#"
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "HTML5", category: "frontend", color: "#E34F26", icon: "html5", level: 100 },
  { name: "CSS3", category: "frontend", color: "#1572B6", icon: "css3", level: 98 },
  { name: "JavaScript", category: "frontend", color: "#F7DF1E", icon: "javascript", level: 95 },
  { name: "React.js", category: "frontend", color: "#61DAFB", icon: "react", level: 98 },
  { name: "Next.js", category: "frontend", color: "#000000", icon: "nextdotjs", level: 90 },
  { name: "Tailwind CSS", category: "frontend", color: "#06B6D4", icon: "tailwindcss", level: 95 },
  { name: "TypeScript", category: "frontend", color: "#3178C6", icon: "typescript", level: 92 },
  { name: "Node.js", category: "backend", color: "#339933", icon: "nodedotjs", level: 85 },

  // Backend & Frameworks
  { name: "Python", category: "backend", color: "#3776AB", icon: "python", level: 95 },
  { name: "SQL", category: "backend", color: "#4479A1", icon: "mysql", level: 92 },
  { name: "Java", category: "backend", color: "#007396", icon: "java", level: 80 },
  { name: "PHP", category: "backend", color: "#777BB4", icon: "php", level: 85 },
  { name: "MongoDB", category: "backend", color: "#47A248", icon: "mongodb", level: 88 },
  { name: "Laravel", category: "backend", color: "#FF2D20", icon: "laravel", level: 85 },
  { name: "Bootstrap", category: "frontend", color: "#7952B3", icon: "bootstrap", level: 90 },
  { name: "jQuery", category: "frontend", color: "#0769AD", icon: "jquery", level: 85 },

  // Outils / Dev
  { name: "VS Code", category: "tool", color: "#007ACC", icon: "visualstudiocode", level: 95 },
  { name: "Git", category: "tool", color: "#F05032", icon: "git", level: 92 },
  { name: "GitHub", category: "tool", color: "#181717", icon: "github", level: 95 },
  { name: "Windsurf", category: "tool", color: "#00A3E0", icon: "windsurf", level: 80 }
];
