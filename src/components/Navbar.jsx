"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_boost-productivity-1/artifacts/pdgzhljg_NikaIA%20automations%20blanc.png";

const navLinks = [
  { href: "#probleme", label: "Problème" },
  { href: "#solutions", label: "Solutions" },
  { href: "#offres", label: "Offres" },
  { href: "#processus", label: "Processus" },
  { href: "#faq", label: "FAQ" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
];

export const Navbar = ({ onContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "navbar-glass" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center" data-testid="navbar-logo">
            <img 
              src={LOGO_URL} 
              alt="NikaIA Automations" 
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={onContact}
              className="btn-primary text-sm"
              data-testid="navbar-cta"
            >
              Diagnostic Gratuit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A] border-t border-white/10"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 py-2"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onContact();
                }}
                className="btn-primary text-sm mt-2"
                data-testid="mobile-cta"
              >
                Diagnostic Gratuit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

