
import React, { useState, useEffect } from 'react';
import { X, Play, Code2, Files, Settings, Terminal, Users, Search, FolderTree, FileCode, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface DevSyncDemoProps {
  onClose: () => void;
  lang: Language;
}

const DevSyncDemo: React.FC<DevSyncDemoProps> = ({ onClose, lang }) => {
  const [activeFile, setActiveFile] = useState('App.tsx');
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const t = {
    fr: {
      title: "DevSync Cloud IDE - Collaboration en temps réel",
      run: "Exécuter",
      terminal: "Terminal",
      files: "Explorateur",
      collabs: "Collaborateurs",
      status: "Connecté au serveur de build...",
      running: "Compilation du projet...",
      done: "Projet compilé avec succès."
    },
    en: {
      title: "DevSync Cloud IDE - Real-time Collaboration",
      run: "Run Code",
      terminal: "Terminal",
      files: "Explorer",
      collabs: "Collaborators",
      status: "Connected to build server...",
      running: "Compiling project...",
      done: "Project compiled successfully."
    }
  }[lang];

  const files = [
    { name: 'App.tsx', language: 'typescript' },
    { name: 'Header.tsx', language: 'typescript' },
    { name: 'utils.ts', language: 'typescript' },
    { name: 'styles.css', language: 'css' }
  ];

  const handleRun = () => {
    setIsRunning(true);
    setOutput(prev => [...prev, `> ${t.running}`]);
    
    setTimeout(() => {
      setOutput(prev => [...prev, `[LOG] Render cycle complete in 124ms`, `[SUCCESS] ${t.done}`]);
      setIsRunning(false);
    }, 1500);
  };

  // Simulate "remote typing" indicators
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 2000);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="bg-[#1e1e1e] w-full max-w-6xl h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-800 font-sans">
        
        {/* Header bar */}
        <div className="h-12 bg-[#2d2d2d] border-b border-gray-800 flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="h-4 w-px bg-gray-700 mx-2"></div>
            <span className="text-gray-400 text-xs font-bold flex items-center">
              <Code2 className="w-4 h-4 mr-2 text-blue-400" /> {t.title}
            </span>
          </div>
          <div className="flex items-center space-x-3">
             <div className="flex items-center space-x-1 bg-gray-800 px-2 py-1 rounded text-[10px] text-gray-400 font-bold border border-gray-700">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
               <span>{t.status}</span>
             </div>
             <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Activity Bar */}
          <div className="w-12 bg-[#333333] flex flex-col items-center py-4 space-y-6">
            <Files className="w-6 h-6 text-gray-400 cursor-pointer hover:text-white" />
            <Search className="w-6 h-6 text-gray-500 cursor-pointer hover:text-white" />
            <Users className="w-6 h-6 text-blue-400 cursor-pointer" />
            <Settings className="w-6 h-6 text-gray-500 cursor-pointer hover:text-white absolute bottom-4" />
          </div>

          {/* Sidebar - File Explorer */}
          <div className="w-56 bg-[#252526] border-r border-gray-800 p-4">
            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4 flex items-center">
              <FolderTree className="w-3 h-3 mr-2" /> {t.files}
            </h4>
            <div className="space-y-1">
              {files.map(file => (
                <button 
                  key={file.name}
                  onClick={() => setActiveFile(file.name)}
                  className={`w-full flex items-center space-x-2 px-2 py-1 rounded text-sm transition-colors ${activeFile === file.name ? 'bg-blue-600/20 text-blue-400 font-bold' : 'text-gray-400 hover:bg-gray-800'}`}
                >
                  <FileCode className={`w-3.5 h-3.5 ${activeFile === file.name ? 'text-blue-400' : 'text-gray-500'}`} />
                  <span>{file.name}</span>
                </button>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4 flex items-center">
                <Users className="w-3 h-3 mr-2" /> {t.collabs}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-black">A</div>
                  <span className="text-xs text-gray-300">Alex (You)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-[10px] font-black">M</div>
                  <span className="text-xs text-gray-300">Marc</span>
                  {isTyping && <div className="text-[8px] text-orange-400 italic ml-auto">typing...</div>}
                </div>
              </div>
            </div>
          </div>

          {/* Editor Area */}
          <div className="flex-1 flex flex-col bg-[#1e1e1e]">
            {/* Tabs */}
            <div className="h-9 bg-[#2d2d2d] flex items-center px-4 space-x-4 border-b border-gray-800">
               <div className="flex items-center space-x-2 bg-[#1e1e1e] px-3 h-full border-t-2 border-blue-500 text-xs text-gray-200">
                 <FileCode className="w-3 h-3 text-blue-400" />
                 <span>{activeFile}</span>
               </div>
               <button 
                onClick={handleRun}
                disabled={isRunning}
                className="ml-auto flex items-center space-x-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-[10px] font-black transition-all"
               >
                 {isRunning ? <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <Play className="w-3 h-3" />}
                 <span>{t.run.toUpperCase()}</span>
               </button>
            </div>

            {/* Code Content */}
            <div className="flex-1 p-6 font-mono text-sm overflow-y-auto relative">
              <div className="absolute left-0 top-6 w-10 text-right pr-4 text-gray-600 select-none">
                {Array.from({length: 20}).map((_, i) => <div key={i}>{i+1}</div>)}
              </div>
              <div className="ml-8 space-y-1">
                <div className="text-purple-400">import <span className="text-blue-400">React</span> from <span className="text-orange-400">'react'</span>;</div>
                <div className="text-purple-400">import <span className="text-blue-400">{'{ useState }'}</span> from <span className="text-orange-400">'react'</span>;</div>
                <div className="h-4"></div>
                <div className="text-purple-400">export default <span className="text-yellow-400">function</span> <span className="text-blue-400">App</span>() {'{'}</div>
                <div className="pl-4"><span className="text-purple-400">const</span> [count, setCount] = <span className="text-blue-400">useState</span>(<span className="text-orange-400">0</span>);</div>
                <div className="h-4"></div>
                <div className="pl-4 text-purple-400">return (</div>
                <div className="pl-8 text-blue-300">{'<div className="p-8 text-center bg-gray-900">'}</div>
                <div className="pl-12 text-blue-300">{'<h1 className="text-3xl font-bold">Hello DevSync!</h1>'}</div>
                <div className="pl-12 text-blue-300">{'<button onClick={() => setCount(count + 1)}>'}</div>
                <div className="pl-16 text-blue-300">Count is: {'{count}'}</div>
                <div className="pl-12 text-blue-300">{'</button>'}</div>
                <div className="pl-8 text-blue-300">{'</div>'}</div>
                <div className="pl-4 text-purple-400">);</div>
                <div className="text-purple-400">{'}'}</div>

                {/* Simulated other user cursor */}
                <div className="relative inline-block ml-1">
                   <div className="absolute left-0 top-0 w-0.5 h-5 bg-orange-500"></div>
                   <div className="absolute left-1 -top-4 px-1.5 py-0.5 bg-orange-500 text-white text-[8px] font-black rounded whitespace-nowrap">Marc</div>
                </div>
              </div>
            </div>

            {/* Terminal Area */}
            <div className="h-40 bg-[#000000] border-t border-gray-800 flex flex-col">
              <div className="flex items-center px-4 py-1 bg-[#1e1e1e] border-b border-gray-800">
                <Terminal className="w-3 h-3 text-gray-500 mr-2" />
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{t.terminal}</span>
              </div>
              <div className="flex-1 p-4 font-mono text-[11px] overflow-y-auto space-y-1">
                <div className="text-gray-500">Last login: {new Date().toLocaleDateString()} on ttys001</div>
                <div className="text-blue-400">dev@devsync:~/workspace$ <span className="text-white">npm run start</span></div>
                {output.map((line, i) => (
                  <div key={i} className={line.includes('SUCCESS') ? 'text-emerald-400' : 'text-gray-400'}>{line}</div>
                ))}
                {isRunning && <div className="text-gray-400 flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce mr-1"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce mr-1" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevSyncDemo;
