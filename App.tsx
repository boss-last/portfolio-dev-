
import React, { useState, useEffect, useCallback } from 'react';
import { Language, Theme } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactAssistant from './components/ContactAssistant';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProjectDemoPage from './components/ProjectDemoPage';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fr');
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  const [isDemoRoute, setIsDemoRoute] = useState<boolean>(() => window.location.hash.startsWith('#/demo/'));

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleLanguage = useCallback(() => {
    setLang(prev => (prev === 'fr' ? 'en' : 'fr'));
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  }, []);

  useEffect(() => {
    const onHashChange = () => setIsDemoRoute(window.location.hash.startsWith('#/demo/'));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header 
        lang={lang} 
        theme={theme} 
        onToggleLang={toggleLanguage} 
        onToggleTheme={toggleTheme} 
      />
      <main>
        {isDemoRoute ? (
          <ProjectDemoPage lang={lang} />
        ) : (
          <>
            <Hero lang={lang} />
            <About lang={lang} />
            <Skills lang={lang} />
            <Projects lang={lang} />
            <ContactAssistant lang={lang} />
          </>
        )}
      </main>
      <Footer lang={lang} />
      <ScrollToTop />
    </div>
  );
};

export default App;
