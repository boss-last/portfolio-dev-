
import React from 'react';
import { Language, Theme } from '../types';
import { Sun, Moon, Languages } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  theme: Theme;
  onToggleLang: () => void;
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ lang, theme, onToggleLang, onToggleTheme }) => {
  const navLinks = {
    fr: [
      { name: "À Propos", id: "about" },
      { name: "Compétences", id: "skills" },
      { name: "Projets", id: "projects" },
      { name: "CV", id: "cv" },
      { name: "Contact", id: "contact" },
    ],
    en: [
      { name: "About", id: "about" },
      { name: "Skills", id: "skills" },
      { name: "Projects", id: "projects" },
      { name: "Resume", id: "cv" },
      { name: "Contact", id: "contact" },
    ]
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Hauteur du header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-black bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent tracking-tighter">
              BAMBA.
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks[lang].map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium hover:text-blue-500 transition-colors cursor-pointer outline-none"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={onToggleLang}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Language"
            >
              <div className="flex items-center space-x-1">
                <Languages className="w-5 h-5" />
                <span className="text-xs font-bold uppercase">{lang}</span>
              </div>
            </button>
            <button 
              onClick={onToggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === Theme.LIGHT ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
