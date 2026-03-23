"use client";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_boost-productivity-1/artifacts/pdgzhljg_NikaIA%20automations%20blanc.png";

export const Footer = ({ onContact }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/10" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <img 
              src={LOGO_URL} 
              alt="NikaIA Automations" 
              className="h-10 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Transformez vos tâches en revenus grâce à l'automatisation et à l'IA. 
              Solutions sur mesure pour PME, TPE et indépendants à Nice et en région PACA.
            </p>
            <button
              onClick={onContact}
              className="btn-primary text-sm"
              data-testid="footer-cta"
            >
              Demander un diagnostic
            </button>
          </div>

{/* Navigation */}
<div>
  <h4 className="text-white font-semibold mb-4">Navigation</h4>
  <ul className="space-y-3">
    <li>
      <a href="/#probleme" className="text-gray-400 hover:text-white transition-colors duration-200">
        Le problème
      </a>
    </li>
    <li>
      <a href="/#solutions" className="text-gray-400 hover:text-white transition-colors duration-200">
        Les solutions
      </a>
    </li>
    <li>
      <a href="/#offres" className="text-gray-400 hover:text-white transition-colors duration-200">
        Nos offres
      </a>
    </li>
    <li>
      <a href="/#processus" className="text-gray-400 hover:text-white transition-colors duration-200">
        Processus
      </a>
    </li>
    <li>
      <a href="/#faq" className="text-gray-400 hover:text-white transition-colors duration-200">
        FAQ
      </a>
    </li>
    <li>
      <a href="/qui-sommes-nous" className="text-gray-400 hover:text-white transition-colors duration-200">
        Qui sommes-nous
      </a>
    </li>
    <li>
      <a href="/politique-de-confidentialite" className="text-gray-400 hover:text-white transition-colors duration-200">
        Politique de confidentialité
      </a>
    </li>
  </ul>
</div>
          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:contact@nikaia-automations.com" 
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
                  data-testid="footer-email"
                >
                  <Mail className="w-5 h-5 text-nikaia flex-shrink-0" />
                  <span className="text-sm">contact@nikaia-automations.com</span>
                </a>
              </li>
<li>
  <a href="https://wa.me/33619251902" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.133 1.535 5.865L.057 23.486a.5.5 0 0 0 .609.61l5.757-1.505A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 0 1-5.031-1.378l-.36-.214-3.733.976.999-3.648-.235-.374A9.865 9.865 0 0 1 2.118 12C2.118 6.56 6.56 2.118 12 2.118c5.441 0 9.882 4.441 9.882 9.882 0 5.44-4.441 9.882-9.882 9.882z"/></svg>
    <span>06 19 25 19 02</span>
  </a>
</li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-nikaia flex-shrink-0 mt-0.5" />
                <span>Nice & Région PACA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} NikaIA Automations. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="https://nikaia-automations.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-200 flex items-center gap-1"
            >
              nikaia-automations.com
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

