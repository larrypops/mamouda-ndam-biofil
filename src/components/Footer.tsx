import Link from "next/link";
import {
  Phone,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">M</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Mamouda Ndam <span className="text-primary">Biofil</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Spécialiste de la conception et de l'installation de systèmes
              sanitaires écologiques au Cameroun. Une alternative moderne et
              durable aux fosses septiques traditionnelles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-display font-bold mb-6">Liens Rapides</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-primary transition-colors">
                  Solutions Biofil
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-bold mb-6">Nos Solutions</h3>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-primary cursor-default transition-colors">
                Maisons individuelles
              </li>
              <li className="hover:text-primary cursor-default transition-colors">
                Écoles & Hôtels
              </li>
              <li className="hover:text-primary cursor-default transition-colors">
                Entreprises
              </li>
              <li className="hover:text-primary cursor-default transition-colors">
                Sites isolés
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Douala, Bonaberi, Cameroun</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+237 6 55 83 04 59</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle size={18} className="text-primary shrink-0" />
                <a
                  href="https://wa.me/237655830459"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp Direct
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
          <p>© {new Date().getFullYear()} Mamouda Ndam Biofil. Tous droits réservés.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
