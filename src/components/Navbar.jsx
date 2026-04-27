"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_boost-productivity-1/artifacts/pdgzhljg_NikaIA%20automations%20blanc.png";

const navLinks = [
  { href: "/presentation", label: "Présentation" },
  { href: "/#probleme", label: "Problème" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/#offres", label: "Offres" },
  { href: "/#processus", label: "Processus" },
  { href: "/#benefices", label: "Bénéfices" },
  { href: "/catalogue", label: "Exemples d'automatisations" },
  { href: "/#projets", label: "Projets réalisés" },
  { href: "/#faq", label: "FAQ" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
];

export const Navbar = ({ onContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <div>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "navbar-glass" : "bg-transparent"
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="flex items-center justify-between h-20">

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
                data-testid="menu-toggle"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <a href="/" className="flex items-center" data-testid="navbar-logo">
                <img src={LOGO_URL} alt="NikaIA Automations" className="h-10 md:h-12 w-auto" />
              </a>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <a
                href="https://wa.me/33619251902"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-200 text-white text-sm font-medium"
              >
                <MessageCircle size={16} />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <button
                onClick={onContact}
                className="flex items-center px-3 md:px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white text-xs md:text-sm font-medium whitespace-nowrap"
                data-testid="navbar-cta"
              >
                Diagnostic Gratuit
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/60 z-40"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-80 bg-[#0A0A0A] border-r border-white/10 z-50 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
              <img src={LOGO_URL} alt="NikaIA" className="h-8 w-auto" />
              <button onClick={() => setIsMenuOpen(false)} className="text-white p-2">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-400 hover:text-white hover:bg-white/5 transition-colors duration-200 py-3 px-4 rounded-xl text-base font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="px-6 py-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href="https://wa.me/33619251902"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors text-white text-sm font-medium"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <button
                onClick={() => { setIsMenuOpen(false); onContact(); }}
                className="py-3 rounded-full bg-red-600 hover:bg-red-700 transition-colors text-white text-sm font-medium"
              >
                Diagnostic Gratuit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
