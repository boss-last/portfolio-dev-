
import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { askAssistant } from '../services/geminiService';
import { Send, Bot, User, Loader2 } from 'lucide-react';

interface ContactAssistantProps {
  lang: Language;
}

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const ContactAssistant: React.FC<ContactAssistantProps> = ({ lang }) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      text: lang === 'fr' 
        ? "Bonjour ! Je suis l'assistant IA d'Alex. Posez-moi une question sur ses projets ou ses compétences." 
        : "Hello! I'm Alex's AI assistant. Ask me anything about his projects or skills." 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await askAssistant(userMessage, lang);
    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    setIsLoading(false);
  };

  const t = {
    fr: {
      title: "Contactez-moi",
      subtitle: "Discuter avec mon assistant IA",
      placeholder: "Écrivez votre message...",
      desc: "L'IA peut vous aider à trouver rapidement les informations que vous cherchez sur mon parcours."
    },
    en: {
      title: "Contact Me",
      subtitle: "Chat with my AI Assistant",
      placeholder: "Write your message...",
      desc: "The AI can help you quickly find the information you're looking for about my background."
    }
  }[lang];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2">{t.title}</h2>
          <h3 className="text-3xl font-bold mb-4">{t.subtitle}</h3>
          <p className="text-gray-500 dark:text-gray-400">{t.desc}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-[500px]">
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-4"
          >
            {messages.map((m, i) => (
              <div 
                key={i} 
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[80%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-blue-600 ml-2' : 'bg-gray-200 dark:bg-gray-700 mr-2'}`}>
                    {m.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-gray-600 dark:text-gray-300" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'}`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex max-w-[80%] items-end space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0 mr-2">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-100 dark:bg-gray-700 rounded-bl-none">
                    <span className="flex space-x-1">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.placeholder}
                className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-6 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-700 text-white rounded-full transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactAssistant;
