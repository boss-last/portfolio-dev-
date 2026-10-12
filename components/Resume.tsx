import React from 'react';
import { Language } from '../types';
import { Download, Eye, FileText } from 'lucide-react';

interface ResumeProps {
  lang: Language;
}

export const CV_URL = "/CV-Amara-Christian-BAMBA.pdf";
export const CV_FILENAME = "CV-Amara-Christian-BAMBA.pdf";

const Resume: React.FC<ResumeProps> = ({ lang }) => {
  const t = {
    fr: {
      title: "Curriculum Vitae",
      subtitle: "Mon CV",
      desc: "Retrouvez mon parcours, mes expériences et mes compétences en détail. Consultez-le directement ici ou téléchargez-le au format PDF.",
      download: "Télécharger mon CV",
      view: "Ouvrir dans un nouvel onglet",
      fallback: "Votre navigateur ne peut pas afficher le PDF directement."
    },
    en: {
      title: "Resume",
      subtitle: "My Resume",
      desc: "Discover my background, experience and skills in detail. View it right here or download it as a PDF.",
      download: "Download my Resume",
      view: "Open in a new tab",
      fallback: "Your browser cannot display the PDF inline."
    }
  }[lang];

  return (
    <section id="cv" className="py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-3 flex items-center justify-center">
            <span className="w-8 h-px bg-blue-500 mr-3"></span>
            {t.title}
            <span className="w-8 h-px bg-blue-500 ml-3"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent leading-tight">
            {t.subtitle}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{t.desc}</p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CV_URL}
              download={CV_FILENAME}
              className="group flex items-center justify-center px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black transition-all shadow-xl shadow-blue-500/25 active:scale-95"
            >
              <Download className="mr-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              {t.download}
            </a>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 rounded-2xl border border-gray-300 dark:border-gray-700 hover:border-blue-500 hover:text-blue-500 font-bold transition-all"
            >
              <Eye className="mr-2 w-5 h-5" />
              {t.view}
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <object
            data={`${CV_URL}#view=FitH`}
            type="application/pdf"
            className="w-full h-[70vh] md:h-[85vh]"
            aria-label={t.subtitle}
          >
            <div className="flex flex-col items-center justify-center p-12 text-center text-gray-600 dark:text-gray-400">
              <FileText className="w-12 h-12 mb-4 text-blue-500" />
              <p className="mb-6">{t.fallback}</p>
              <a
                href={CV_URL}
                download={CV_FILENAME}
                className="flex items-center px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all"
              >
                <Download className="mr-2 w-5 h-5" />
                {t.download}
              </a>
            </div>
          </object>
        </div>
      </div>
    </section>
  );
};

export default Resume;
