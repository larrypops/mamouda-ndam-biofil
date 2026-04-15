"use client";

import { motion } from "motion/react";
import {
  Target,
  Eye,
  Award,
  Users,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <div className="pt-24">
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn} className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900">
              À propos de <span className="text-primary">Mamouda Ndam Biofil</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expertise en solutions sanitaires écologiques au Cameroun.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-slate-900">
                Notre Histoire & Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Mamouda Ndam Biofil est une entreprise spécialisée dans la
                conception et l’installation de systèmes sanitaires écologiques
                au Cameroun.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Nous proposons des solutions modernes qui remplacent
                efficacement les fosses septiques traditionnelles, souvent
                coûteuses, peu durables et sources de nuisances.
              </p>
              <div className="bg-primary-light/30 p-6 rounded-2xl border-l-4 border-primary">
                <p className="text-primary-dark font-bold text-xl">
                  "Offrir une alternative durable, économique et adaptée aux
                  réalités locales."
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/IMG_4744.jpg"
                alt="Notre équipe sur le terrain"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div {...fadeIn} className="space-y-6 bg-slate-800 p-10 rounded-3xl">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-display font-bold">Notre Vision</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Nous voulons contribuer à améliorer les conditions sanitaires en
                Afrique en proposant des solutions propres, durables et
                accessibles à tous.
              </p>
            </motion.div>
            <motion.div {...fadeIn} className="space-y-6 bg-slate-800 p-10 rounded-3xl">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-display font-bold">Notre Engagement</h3>
              <ul className="space-y-4">
                {[
                  "Qualité des installations",
                  "Respect de l'environnement",
                  "Accompagnement client de A à Z",
                  "Solutions adaptées à chaque projet",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-300">
                    <CheckCircle2 size={20} className="text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900">
              Notre Expertise
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award />,
                title: "Installation Biofil",
                desc: "Expertise technique certifiée.",
              },
              {
                icon: <HomeIcon />,
                title: "Toilettes Écologiques",
                desc: "Construction de A à Z.",
              },
              {
                icon: <MapPin />,
                title: "Étude de Terrain",
                desc: "Adaptation selon le sol.",
              },
              {
                icon: <Users />,
                title: "Formation",
                desc: "Ingénieurs et techniciens.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 text-center space-y-4 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mx-auto shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                <p className="text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin size={40} />
          </div>
          <h2 className="text-4xl font-display font-bold">Zone d'intervention</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Nous intervenons principalement à <strong>Douala</strong> et dans tout le
            <strong> Cameroun</strong>, avec des projets à travers l'Afrique.
          </p>
        </div>
      </section>
    </div>
  );
}

function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
