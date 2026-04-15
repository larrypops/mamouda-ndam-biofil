"use client";

import { motion } from "motion/react";
import {
  Zap,
  Leaf,
  ShieldCheck,
  Clock,
  Droplets,
  CheckCircle2,
  Mountain,
  Waves,
  Home as HomeIcon,
  School,
  Hotel,
  Building2,
  Factory,
  Trees,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Solutions() {
  return (
    <div className="pt-24">
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn} className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900">
              Nos solutions <span className="text-primary">Biofil</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une alternative moderne et écologique aux fosses septiques
              traditionnelles.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="space-y-8">
              <h2 className="text-3xl font-display font-bold text-slate-900">
                Comment fonctionne le système ?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Le système Biofil repose sur un traitement naturel des déchets
                grâce à un digesteur biologique. Contrairement aux fosses
                classiques qui stockent, Biofil traite et transforme.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Décomposition écologique",
                    desc: "Les déchets sont décomposés de manière naturelle par des micro-organismes.",
                  },
                  {
                    title: "Élimination des odeurs",
                    desc: "Le processus aérobie empêche la formation de gaz malodorants.",
                  },
                  {
                    title: "Zéro vidange",
                    desc: "Le volume de boues est réduit au minimum, éliminant le besoin de vidange.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex space-x-4">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-bold text-xl">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{step.title}</h4>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/IMG_4745.jpg"
                alt="Système Biofil en installation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl">
                <p className="text-slate-900 font-semibold">
                  Installation technique adaptée à chaque terrain.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900">
              Les avantages clés
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplets />,
                title: "Aucune vidange",
                desc: "Économisez sur les frais d'entretien annuels.",
              },
              {
                icon: <Zap />,
                title: "Zéro odeur",
                desc: "Un confort total pour votre environnement.",
              },
              {
                icon: <ShieldCheck />,
                title: "Durée de vie 50 ans",
                desc: "Un investissement pour toute une vie.",
              },
              {
                icon: <Leaf />,
                title: "Écologique",
                desc: "Protégez les nappes phréatiques locales.",
              },
              {
                icon: <Clock />,
                title: "Installation rapide",
                desc: "Système opérationnel en un temps record.",
              },
              {
                icon: <CheckCircle2 />,
                title: "Coût réduit",
                desc: "Rentable sur le long terme par rapport au classique.",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-primary transition-colors"
              >
                <div className="text-primary mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-display font-bold text-slate-900">
              Adapté à tous les terrains
            </h2>
            <p className="text-lg text-slate-600">
              Le système Biofil s'adapte aux réalités géologiques du Cameroun.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Trees />, label: "Terrain sec" },
              { icon: <Waves />, label: "Terrain marécageux" },
              { icon: <Mountain />, label: "Terrain rocheux" },
              { icon: <Mountain className="rotate-45" />, label: "En pente" },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mx-auto border border-slate-100">
                  {item.icon}
                </div>
                <span className="font-bold text-slate-900">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold">Domaines d'application</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: <HomeIcon />, label: "Maisons" },
              { icon: <School />, label: "Écoles" },
              { icon: <Hotel />, label: "Hôtels" },
              { icon: <Building2 />, label: "Entreprises" },
              { icon: <Factory />, label: "Industries" },
              { icon: <Trees />, label: "Zones rurales" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <span className="font-bold text-sm text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-slate-900 text-center mb-16">
            Notre processus d'installation
          </h2>
          <div className="space-y-12">
            {[
              {
                title: "Analyse du terrain",
                desc: "Étude géologique pour déterminer le meilleur emplacement.",
              },
              {
                title: "Dimensionnement",
                desc: "Calcul de la capacité nécessaire selon l'usage (nombre d'habitants).",
              },
              {
                title: "Installation professionnelle",
                desc: "Mise en place du digesteur et des raccordements par nos experts.",
              },
              {
                title: "Suivi après installation",
                desc: "Vérification du bon fonctionnement et conseils d'utilisation.",
              },
            ].map((step, i) => (
              <div key={i} className="flex space-x-8 relative">
                {i < 3 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-slate-100" />
                )}
                <div className="shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl relative z-10">
                  {i + 1}
                </div>
                <div className="pb-8">
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-lg text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
