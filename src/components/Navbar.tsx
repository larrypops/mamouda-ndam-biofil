"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "À propos", path: "/a-propos" },
  { name: "Solutions Biofil", path: "/solutions" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">M</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">
              Mamouda Ndam <span className="text-primary">Biofil</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.path ? "text-primary" : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/237655830459"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center space-x-2 hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-slate-600 hover:text-primary p-2"
              aria-label="Ouvrir le menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block px-3 py-4 text-base font-medium rounded-md ${
                    pathname === link.path
                      ? "text-primary bg-primary-light/30"
                      : "text-slate-600 hover:text-primary hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="https://wa.me/237655830459"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-white px-5 py-4 rounded-xl text-center font-bold flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Discuter sur WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
