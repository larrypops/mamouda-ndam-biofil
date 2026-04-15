"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    projectType: "Maison",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-24">
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn} className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900">
              Contactez-<span className="text-primary">nous</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Vous avez un projet ou souhaitez remplacer votre fosse septique ?
              Notre équipe est disponible pour vous accompagner.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn} className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-display font-bold text-slate-900">
                  Informations de contact
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Localisation</h4>
                      <p className="text-slate-600">Douala, Bonaberi, Cameroun</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Téléphone</h4>
                      <p className="text-slate-600">+237 6 55 83 04 59</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                      <MessageCircle size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">WhatsApp</h4>
                      <a
                        href="https://wa.me/237655830459"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-bold hover:underline"
                      >
                        Cliquez ici pour discuter
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src="/images/IMG_4746.jpg"
                  alt="Intervention de l'équipe Biofil"
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Pourquoi nous contacter ?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Réponse rapide garantie",
                    "Devis gratuit et sans engagement",
                    "Conseils personnalisés selon votre terrain",
                    "Expertise technique locale",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-slate-600">
                      <CheckCircle2 size={20} className="text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center space-x-4 text-slate-400">
                <Clock size={20} />
                <span className="text-sm font-medium uppercase tracking-wider">
                  Disponible du lundi au samedi
                </span>
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 lg:p-12"
            >
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-8 text-center">
                Formulaire de demande
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Demande envoyée !</h3>
                  <p className="text-slate-600">
                    Merci pour votre message. Notre équipe vous recontactera dans
                    les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-bold text-slate-700 uppercase tracking-wider"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Votre nom"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-bold text-slate-700 uppercase tracking-wider"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="+237 ..."
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="projectType"
                      className="text-sm font-bold text-slate-700 uppercase tracking-wider"
                    >
                      Type de projet
                    </label>
                    <select
                      id="projectType"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      value={formState.projectType}
                      onChange={(e) =>
                        setFormState({ ...formState, projectType: e.target.value })
                      }
                    >
                      <option>Maison</option>
                      <option>École</option>
                      <option>Entreprise</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-bold text-slate-700 uppercase tracking-wider"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Décrivez votre projet..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 hover:bg-primary-dark transition-all shadow-xl shadow-primary/20"
                  >
                    <Send size={20} />
                    <span>Envoyer la demande</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
              <CheckCircle2 size={24} />
            </div>
            <span className="font-bold text-slate-900">Devis gratuit</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
              <MessageCircle size={24} />
            </div>
            <span className="font-bold text-slate-900">Réponse rapide</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
              <Phone size={24} />
            </div>
            <span className="font-bold text-slate-900">Conseils personnalisés</span>
          </div>
        </div>
      </section>
    </div>
  );
}
