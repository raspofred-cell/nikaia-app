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
                <a href="#probleme" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Le problème
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Les solutions
                </a>
              </li>
              <li>
                <a href="#offres" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Nos offres
                </a>
              </li>
              <li>
                <a href="#processus" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Processus
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-200">
                  FAQ
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
                <a 
                  href="tel:0619022502" 
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
                  data-testid="footer-phone"
                >
                  <Phone className="w-5 h-5 text-nikaia flex-shrink-0" />
                  <span>06 19 02 25 02</span>
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
