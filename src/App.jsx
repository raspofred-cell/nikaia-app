import React, { useState, useEffect, useRef } from 'react';
import { 
  X, CheckCircle, Cpu, Clock, Users, Send, 
  MessageSquare, ArrowRight, Loader2, Moon, Sun, Phone, Mail 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [isDark, setIsDark] = useState(true); // Par défaut en sombre pour l'élégance
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Basculer le mode sombre
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 selection:bg-red-500 selection:text-white">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-100 dark:border-white/10 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* LOGO (Image uniquement, agrandie) */}
          <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="NikaIA Automations" 
                className="h-12 md:h-16 w-auto object-contain" 
              />
             </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest">
              <a href="#accueil" className="hover:text-red-600 transition-colors">Accueil</a>
              <a href="#benefices" className="hover:text-red-600 transition-colors">Expertise</a>
              <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
            </div>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-red-600 hover:text-white transition-all"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="accueil" className="pt-48 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
              L'ÉLÉGANCE DE <br />
              <span className="text-red-600 ">L'AUTOMATISATION</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-4xl mx-auto font-light leading-relaxed mb-12">
              NikaIA conçoit des systèmes intelligents pour les entrepreneurs exigeants.<br className="hidden md:block" />
              Libérez votre potentiel, nous automatisons le reste.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="#contact" className="px-10 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center gap-2 group">
                DÉMARRER UN PROJET
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center justify-center gap-4 text-sm font-bold border-b border-transparent hover:border-red-600 transition-all py-2">
                <Phone size={16} className="text-red-600" /> 06 19 25 19 02
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- BENEFITS --- */}
      <section id="benefices" className="py-32 px-6 border-t border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { t: "Automatisation Intelligente", d: "Des processus qui pensent, s’exécutent et s’améliorent seuls", i: <Clock /> },
            { t: "Fiabilité Opérationnelle", d: "Des systèmes robustes, testés et surveillés en continu", i: <Cpu /> },
            { t: "Impact Mesurable", d: "Des résultats concrets et rapides sur le temps, les coûts et la performance", i: <Users /> }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -10 }}
              className="p-10 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent hover:border-red-600/30 transition-all"
            >
              <div className="text-red-600 mb-6">{item.i}</div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">{item.t}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-32 px-6 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Contactez <span className="text-red-600">l'agence.</span></h2>
            <p className="text-gray-500 dark:text-gray-400 mb-12">
              Nous répondons à vos besoins d'automatisation sous 24h.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center text-red-600"><Phone size={20}/></div>
                <span className="font-bold">06 19 25 19 02</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center text-red-600"><Mail size={20}/></div>
                <span className="font-bold">contact@nikaia-automations.com</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <form className="grid gap-4">
              <input placeholder="Nom complet" className="w-full p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 outline-none focus:border-red-600 transition-all" />
              <input placeholder="Email professionnel" className="w-full p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 outline-none focus:border-red-600 transition-all" />
              <textarea placeholder="Décrivez votre besoin d'automatisation..." rows="5" className="w-full p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 outline-none focus:border-red-600 transition-all"></textarea>
              <button className="w-full py-5 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition-all uppercase tracking-widest">
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-gray-100 dark:border-white/5 text-center text-xs text-gray-500 uppercase tracking-widest">
        © {new Date().getFullYear()} NikaIA Automations — Excellence en Intelligence Artificielle.
      </footer>

      {/* --- CHATBOT --- */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-16 h-16 bg-red-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
        >
          {isChatOpen ? <X /> : <MessageSquare />}
        </button>
        <AnimatePresence>
          {isChatOpen && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="absolute bottom-20 right-0 w-80 md:w-96 bg-white dark:bg-[#111] rounded-3xl shadow-2xl border border-gray-100 dark:border-white/10 overflow-hidden">
              <div className="p-6 bg-red-600 text-white font-bold flex justify-between uppercase text-xs tracking-widest">
                <span>Assistant NikaIA</span>
                <X size={16} className="cursor-pointer" onClick={() => setIsChatOpen(false)} />
              </div>
              <div className="h-80 p-6 overflow-y-auto text-sm">
                <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-2xl rounded-tl-none italic text-gray-500">
                  Bonjour. Comment puis-je vous accompagner dans vos projets d'automatisation aujourd'hui ?
                </div>
              </div>
              <div className="p-4 border-t border-gray-100 dark:border-white/10 flex gap-2">
                <input placeholder="Écrivez votre message..." className="flex-1 bg-transparent outline-none text-sm px-2" />
                <button className="text-red-600 p-2"><Send size={20}/></button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}