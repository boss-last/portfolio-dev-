
import React from 'react';
import { Language } from '../types';
import { Heart } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            DevAlex.
          </div>
          <p className="text-gray-500 text-sm flex items-center">
            {lang === 'fr' ? 'Fait avec' : 'Made with'} <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" /> {lang === 'fr' ? 'par Alex' : 'by Alex'}
          </p>
          <p className="text-gray-400 text-xs">
            © {currentYear} {lang === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
