
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: { fr: "Plateforme E-commerce Full-Stack", en: "Full-Stack E-commerce Platform" },
    description: { 
      fr: "Une plateforme de commerce électronique complète avec un backend robuste et une interface utilisateur réactive. Gestion des produits, des commandes et des utilisateurs.", 
      en: "A comprehensive e-commerce platform with a robust backend and a responsive user interface. Management of products, orders, and users." 
    },
    tech: ["React.js", "Node.js", "Express.js", "MySQL"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com/boss-last/portfolio-dev-/tree/main/portfolio_projects_source/ecommerce-fullstack",
    demo: "/#/demo/ecommerce"
  },
  {
    id: 2,
    title: { fr: "Application de Gestion de Projet", en: "Project Management Application" },
    description: { 
      fr: "Système de gestion de projet collaboratif permettant le suivi des tâches, la gestion des équipes et la génération de rapports d'avancement.", 
      en: "Collaborative project management system enabling task tracking, team management, and progress report generation." 
    },
    tech: ["Angular", "Node.js", "Express.js", "MariaDB"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com/boss-last/portfolio-dev-/tree/main/portfolio_projects_source/project-management-app",
    demo: "/#/demo/project-management"
  },
  {
    id: 3,
    title: { fr: "Portail d'Entreprise Laravel", en: "Laravel Enterprise Portal" },
    description: { 
      fr: "Un portail d'entreprise sur mesure avec des fonctionnalités avancées d'authentification, de gestion de contenu et d'API RESTful.", 
      en: "A custom enterprise portal with advanced authentication features, content management, and RESTful APIs." 
    },
    tech: ["Laravel", "PHP", "MySQL", "React.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com/boss-last/portfolio-dev-/tree/main/portfolio_projects_source/laravel-enterprise-portal",
    demo: "/#/demo/laravel-portal"
  },
  {
    id: 4,
    title: { fr: "Analyse des Ventes Superstore", en: "Superstore Sales Analysis" },
    description: { 
      fr: "Nettoyage et analyse exploratoire des données de vente d'un supermarché. Découverte de tendances et export de rapports détaillés.", 
      en: "Cleaning and exploratory data analysis of supermarket sales data. Discovering trends and exporting detailed reports." 
    },
    tech: ["Python", "Pandas", "Jupyter", "Excel"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com/boss-last/portfolio-dev-/tree/main/portfolio_projects_source/superstore-sales-analysis",
    demo: "/#/demo/superstore-analysis"
  },
  {
    id: 5,
    title: { fr: "Dashboard d'Analyse Marketing", en: "Marketing Analysis Dashboard" },
    description: { 
      fr: "Création d'un tableau de bord interactif pour l'analyse du tunnel de conversion marketing, intégrant des KPI critiques et des visualisations avancées.", 
      en: "Creation of an interactive dashboard for marketing conversion funnel analysis, integrating critical KPIs and advanced visualizations." 
    },
    tech: ["Power BI", "Excel", "Python"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com/boss-last/portfolio-dev-/tree/main/portfolio_projects_source/marketing-analysis-dashboard",
    demo: "/#/demo/marketing-dashboard"
  },
  {
    id: 6,
    title: { fr: "AbidjanFlow AI", en: "AbidjanFlow AI" },
    description: {
      fr: "Application web full-stack de visualisation du trafic urbain en temps réel, de planification d'itinéraires intelligents et d'assistance à la navigation par IA dans la métropole d'Abidjan.",
      en: "Full-stack web app for real-time urban traffic visualization, smart route planning and AI-powered navigation assistance across the Abidjan metropolitan area."
    },
    tech: ["TypeScript", "React.js", "IA"],
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com/boss-last/AbidjanFlow-ai",
    demo: "https://abidjanflow-ai.vercel.app"
  },
  {
    id: 7,
    title: { fr: "Athletica", en: "Athletica" },
    description: {
      fr: "Plateforme de sport connecté avec un backend Laravel et une application mobile Flutter.",
      en: "Connected sports platform with a Laravel backend and a Flutter mobile app."
    },
    tech: ["Laravel", "PHP", "Flutter"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com/boss-last/athletica"
  }
];

export const SKILLS: Skill[] = [
  // Fullstack (architecture, APIs, workflow)
  { name: "TypeScript", category: "fullstack", color: "#3178C6", icon: "typescript", level: 77 },
  { name: "Node.js", category: "fullstack", color: "#339933", icon: "nodedotjs", level: 80 },
  { name: "Express.js", category: "fullstack", color: "#000000", icon: "express", level: 80 },
  { name: "Git", category: "fullstack", color: "#F05032", icon: "git", level: 85 },

  // Frontend
  { name: "HTML5", category: "frontend", color: "#E34F26", icon: "html5", level: 100 },
  { name: "CSS3", category: "frontend", color: "#1572B6", icon: "css3", level: 98 },
  { name: "JavaScript", category: "frontend", color: "#F7DF1E", icon: "javascript", level: 95 },
  { name: "Angular", category: "frontend", color: "#0F0F11", icon: "angular", level: 95 },
  { name: "React.js", category: "frontend", color: "#61DAFB", icon: "react", level: 98 },
  { name: "Next.js", category: "frontend", color: "#000000", icon: "nextdotjs", level: 90 },
  { name: "Tailwind CSS", category: "frontend", color: "#06B6D4", icon: "tailwindcss", level: 95 },
  
  // Backend & Bases de données
  { name: "Django", category: "backend", color: "#3776AB", icon: "django", level: 70 },
  { name: "PHP", category: "backend", color: "#777BB4", icon: "php", level: 75 },
  { name: "Laravel", category: "backend", color: "#FF2D20", icon: "laravel", level: 85 },
  { name: "MySQL", category: "backend", color: "#4479A1", icon: "mysql", level: 80 },
  { name: "PostgreSQL", category: "backend", color: "#4479A1", icon: "postgresql", level: 80 },

  // Data & Outils
  { name: "VS Code", category: "data", color: "#007ACC", icon: "visualstudiocode", level: 95 },
  { name: "GitHub", category: "data", color: "#181717", icon: "github", level: 95 },
  { name: "Docker", category: "data", color: "#2496ED", icon: "docker", level: 85 },
];
