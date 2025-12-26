
import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Terminal, Download, Globe, Code, Layers, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Language } from '../types';

interface DataSpyDemoProps {
  onClose: () => void;
  lang: Language;
}

const DataSpyDemo: React.FC<DataSpyDemoProps> = ({ onClose, lang }) => {
  const [url, setUrl] = useState('https://example-news.com/tech');
  const [selector, setSelector] = useState('.article-card h2');
  const [isScraping, setIsScraping] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const logEndRef = useRef<HTMLDivElement>(null);

  const t = {
    fr: {
      title: "DataSpy - Moteur de Scraping",
      config: "Configuration",
      target: "URL Cible",
      selector: "Sélecteur CSS",
      run: "Lancer le Scraping",
      logs: "Console Python",
      results: "Données Extraites",
      export: "Exporter",
      status: {
        init: "Initialisation du moteur Python...",
        request: "Envoi de la requête vers ",
        parsing: "Analyse du DOM avec BeautifulSoup...",
        found: " éléments trouvés.",
        done: "Scraping terminé avec succès."
      }
    },
    en: {
      title: "DataSpy - Scraping Engine",
      config: "Configuration",
      target: "Target URL",
      selector: "CSS Selector",
      run: "Run Scraper",
      logs: "Python Console",
      results: "Extracted Data",
      export: "Export",
      status: {
        init: "Initializing Python engine...",
        request: "Sending request to ",
        parsing: "Parsing DOM with BeautifulSoup...",
        found: " elements found.",
        done: "Scraping completed successfully."
      }
    }
  }[lang];

  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const startScraping = () => {
    if (isScraping) return;
    setIsScraping(true);
    setProgress(0);
    setLogs([]);
    setResults([]);

    const runSteps = async () => {
      // Step 1: Init
      setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${t.status.init}`]);
      await new Promise(r => setTimeout(r, 800));
      setProgress(20);

      // Step 2: Request
      setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${t.status.request}${url}`]);
      await new Promise(r => setTimeout(r, 1200));
      setProgress(50);

      // Step 3: Parsing
      setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${t.status.parsing}`]);
      await new Promise(r => setTimeout(r, 1000));
      setProgress(80);

      // Step 4: Results
      const mockResults = [
        { id: 1, title: "L'IA transforme le futur du Web", category: "Tech" },
        { id: 2, title: "Nouveautés React 19 expliquées", category: "Dev" },
        { id: 3, title: "Guide complet du scraping Python", category: "Data" },
        { id: 4, title: "Edge Computing : Les enjeux", category: "Cloud" }
      ];
      setResults(mockResults);
      setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] SUCCESS: ${mockResults.length}${t.status.found}`]);
      setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${t.status.done}`]);
      setProgress(100);
      setIsScraping(false);
    };

    runSteps();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="bg-[#1e1e1e] w-full max-w-5xl h-[85vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-800 font-mono">
        {/* Window Header */}
        <div className="px-6 py-4 bg-[#2d2d2d] border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="text-gray-400 text-sm font-bold flex items-center">
              <Terminal className="w-4 h-4 mr-2" /> {t.title}
            </span>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar Config */}
          <div className="w-full md:w-80 bg-[#252526] border-r border-gray-800 p-6 flex flex-col space-y-6 overflow-y-auto">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center">
                <Globe className="w-3 h-3 mr-2" /> {t.config}
              </h4>
              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 uppercase font-bold">{t.target}</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full bg-[#3c3c3c] border border-gray-700 rounded-lg px-3 py-2 text-xs text-gray-200 outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 uppercase font-bold">{t.selector}</label>
                <div className="relative">
                  <Code className="absolute left-3 top-2.5 w-3 h-3 text-gray-500" />
                  <input 
                    type="text" 
                    value={selector}
                    onChange={(e) => setSelector(e.target.value)}
                    className="w-full bg-[#3c3c3c] border border-gray-700 rounded-lg pl-9 pr-3 py-2 text-xs text-gray-200 outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <button 
                onClick={startScraping}
                disabled={isScraping}
                className={`w-full py-3 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${
                  isScraping 
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20'
                }`}
              >
                {isScraping ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Play className="w-4 h-4 mr-2" />}
                {t.run}
              </button>
            </div>

            <div className="pt-6 border-t border-gray-800 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-500 font-bold">PYTHON VERSION</span>
                <span className="text-[10px] text-emerald-500 font-bold">3.10.12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-500 font-bold">LIBRARIES</span>
                <span className="text-[10px] text-blue-400 font-bold">BeautifulSoup4, Requests</span>
              </div>
            </div>
          </div>

          {/* Main Console & Results */}
          <div className="flex-1 flex flex-col bg-[#1e1e1e] overflow-hidden">
            {/* Progress Bar */}
            {isScraping && (
              <div className="h-1 w-full bg-gray-800">
                <div 
                  className="h-full bg-blue-500 transition-all duration-300 shadow-[0_0_10px_#3b82f6]" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            )}

            {/* Logs Console */}
            <div className="flex-1 p-6 space-y-2 overflow-y-auto bg-[#0f0f0f] border-b border-gray-800">
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className="w-3 h-3 text-emerald-500" />
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{t.logs}</span>
              </div>
              {logs.map((log, i) => (
                <div key={i} className={`text-xs ${log.includes('SUCCESS') ? 'text-emerald-400' : 'text-gray-400'}`}>
                  {log}
                </div>
              ))}
              <div ref={logEndRef} />
            </div>

            {/* Results Display */}
            <div className="h-1/3 p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Layers className="w-3 h-3 text-blue-500" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{t.results}</span>
                </div>
                {results.length > 0 && (
                  <div className="flex space-x-2">
                    <button className="flex items-center px-3 py-1 bg-gray-800 hover:bg-gray-700 text-[10px] font-bold text-gray-300 rounded-md transition-colors border border-gray-700">
                      <Download className="w-3 h-3 mr-1" /> JSON
                    </button>
                    <button className="flex items-center px-3 py-1 bg-gray-800 hover:bg-gray-700 text-[10px] font-bold text-gray-300 rounded-md transition-colors border border-gray-700">
                      <Download className="w-3 h-3 mr-1" /> CSV
                    </button>
                  </div>
                )}
              </div>

              {results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {results.map(res => (
                    <div key={res.id} className="p-3 bg-[#252526] rounded-xl border border-gray-800 flex items-start space-x-3">
                      <div className="p-1.5 bg-blue-900/30 rounded-lg">
                        <CheckCircle className="w-3 h-3 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-200 font-bold">{res.title}</p>
                        <p className="text-[10px] text-gray-500 mt-1">{res.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                !isScraping && (
                  <div className="flex flex-col items-center justify-center h-full text-gray-600 opacity-50">
                    <AlertCircle className="w-8 h-8 mb-2" />
                    <p className="text-xs italic">No data extracted yet.</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSpyDemo;
