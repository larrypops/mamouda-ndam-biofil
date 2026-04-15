"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  CheckCircle2,
  AlertTriangle,
  Droplets,
  Clock,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Home as HomeIcon,
  School,
  Hotel,
  Building2,
  Mountain,
  Zap,
  Leaf,
  Smile,
  ChevronDown,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const projectImages = [
  { src: "/images/IMG_4743.jpg", alt: "Installation Biofil 1" },
  { src: "/images/IMG_4744.jpg", alt: "Installation Biofil 2" },
  { src: "/images/IMG_4745.jpg", alt: "Installation Biofil 3" },
  { src: "/images/IMG_4746.jpg", alt: "Installation Biofil 4" },
];

const comparisonRows = [
  {
    feature: "Vidange",
    classic: "Régulière & coûteuse",
    biofil: "Aucun besoin",
  },
  {
    feature: "Odeurs",
    classic: "Mauvaises odeurs",
    biofil: "Zéro odeur",
  },
  {
    feature: "Coût long terme",
    classic: "Élevé (entretien)",
    biofil: "Économique",
  },
  {
    feature: "Environnement",
    classic: "Pollution possible",
    biofil: "Écologique",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-primary-light/50 via-white to-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                <Zap size={16} />
                <span>Innovation Sanitaire au Cameroun</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-slate-900 leading-[1.1]">
                Remplacez votre fosse septique par une solution
                <span className="text-primary"> Biofil durable</span> et sans
                vidange
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Dites adieu aux odeurs, aux vidanges coûteuses et aux problèmes
                sanitaires. Adoptez une solution moderne, écologique et conçue
                pour durer plus de 50 ans.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 hover:-translate-y-1"
                >
                  <span>Demander un devis</span>
                  <ArrowRight size={20} />
                </Link>
                <a
                  href="https://wa.me/237655830459"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 hover:border-primary hover:text-primary transition-all hover:-translate-y-1"
                >
                  <MessageCircle size={20} />
                  <span>Discuter sur WhatsApp</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-200">
                <div className="flex items-center space-x-2 text-slate-600 font-medium">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span>Installation au Cameroun</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600 font-medium">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span>Solution testée et durable</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600 font-medium">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span>Accompagnement professionnel</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/IMG_4743.jpg"
                  alt="Installation Biofil"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold">Garantie 50 ans</p>
                      <p className="text-slate-500 text-sm">
                        Système biologique certifié
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl hidden sm:block" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl hidden sm:block" />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronDown size={32} className="text-slate-300" />
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Droplets />,
                    title: "Vidanges fréquentes",
                    desc: "Des coûts qui s'accumulent chaque année.",
                  },
                  {
                    icon: <AlertTriangle />,
                    title: "Mauvaises odeurs",
                    desc: "Une nuisance permanente pour votre confort.",
                  },
                  {
                    icon: <ShieldCheck />,
                    title: "Risques sanitaires",
                    desc: "Danger pour la santé de votre famille.",
                  },
                  {
                    icon: <Clock />,
                    title: "Dégradation rapide",
                    desc: "Un système qui ne tient pas dans le temps.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="text-red-500 mb-4">{item.icon}</div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl font-display font-extrabold text-slate-900">
                Les fosses septiques traditionnelles vous coûtent
                <span className="text-red-500"> plus que vous ne le pensez</span>
              </h2>
              <p className="text-lg text-slate-600">
                Chaque année, vous dépensez de l’argent pour un système qui ne
                dure pas. Les problèmes s'accentuent en saison des pluies,
                créant stress et dépenses imprévues.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <p className="text-red-700 font-bold text-xl italic">
                  "Chaque année, vous dépensez de l’argent pour un système qui
                  ne dure pas."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-display font-extrabold text-slate-900">
              Une nouvelle génération de systèmes sanitaires:
              <span className="text-primary"> Biofil</span>
            </h2>
            <p className="text-lg text-slate-600">
              Le système Biofil est une solution innovante qui remplace les
              fosses septiques traditionnelles grâce à un système biologique
              avancé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Aucune vidange",
                desc: "Grâce au processus biologique, les déchets sont décomposés naturellement.",
                icon: <Droplets className="text-primary" />,
              },
              {
                title: "Zéro odeur",
                desc: "Le système est hermétique et conçu pour éliminer toute nuisance olfactive.",
                icon: <Smile className="text-primary" />,
              },
              {
                title: "Écologique",
                desc: "Respectueux de l'environnement, sans pollution des nappes phréatiques.",
                icon: <Leaf className="text-primary" />,
              },
              {
                title: "Installation rapide",
                desc: "Mise en place en quelques jours seulement par nos experts.",
                icon: <Zap className="text-primary" />,
              },
              {
                title: "Durable",
                desc: "Une durée de vie exceptionnelle allant jusqu'à 50 ans.",
                icon: <ShieldCheck className="text-primary" />,
              },
              {
                title: "Économique",
                desc: "Un investissement rentable dès les premières années.",
                icon: <CheckCircle2 className="text-primary" />,
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-primary-light/20 transition-colors group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-extrabold mb-4">
              Une solution adaptée à tous
            </h2>
            <p className="text-slate-400 text-lg">
              Peu importe votre projet, nous avons une solution adaptée.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: <HomeIcon />, label: "Maisons" },
              { icon: <School />, label: "Écoles" },
              { icon: <Hotel />, label: "Hôtels" },
              { icon: <Building2 />, label: "Entreprises" },
              { icon: <Mountain />, label: "Sites isolés" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center space-y-4 group cursor-default"
              >
                <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <span className="font-bold text-lg">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="space-y-8">
              <h2 className="text-4xl font-display font-extrabold text-slate-900">
                Pourquoi choisir
                <span className="text-primary"> Mamouda Ndam Biofil ?</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Expertise locale au Cameroun",
                  "Installation professionnelle",
                  "Solutions adaptées à votre terrain",
                  "Formation et accompagnement",
                  "Suivi après installation",
                ].map((text, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-lg text-slate-700 font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              {...fadeIn}
              className="bg-primary-light/30 rounded-3xl p-8 lg:p-12"
            >
              <div className="space-y-8">
                <h3 className="text-2xl font-display font-bold text-slate-900">
                  Une technologie fiable et éprouvée
                </h3>
                <ul className="space-y-6">
                  <li className="flex space-x-4">
                    <div className="shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Tous types de sols</h4>
                      <p className="text-slate-600 text-sm">
                        Fonctionne parfaitement sur terrains marécageux ou
                        rocheux.
                      </p>
                    </div>
                  </li>
                  <li className="flex space-x-4">
                    <div className="shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                      <Leaf size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Écologique</h4>
                      <p className="text-slate-600 text-sm">
                        Système sans pollution, respectant les normes
                        environnementales.
                      </p>
                    </div>
                  </li>
                  <li className="flex space-x-4">
                    <div className="shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Zéro nuisible</h4>
                      <p className="text-slate-600 text-sm">
                        Conception hermétique empêchant les insectes et
                        nuisibles.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-4">
              Biofil vs Fosse traditionnelle
            </h2>
            <p className="text-slate-600">Comparez et faites le choix de la modernité.</p>
          </div>

          <div className="space-y-4 md:hidden">
            {comparisonRows.map((row) => (
              <div
                key={row.feature}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  {row.feature}
                </p>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Fosse classique
                    </p>
                    <p className="mt-1 text-slate-700 font-medium">{row.classic}</p>
                  </div>
                  <div className="rounded-xl border border-primary/20 bg-primary-light/40 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary-dark">
                      Biofil
                    </p>
                    <p className="mt-1 text-primary font-bold">{row.biofil}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-6 font-display font-bold">Caractéristique</th>
                  <th className="p-6 font-display font-bold">Fosse classique</th>
                  <th className="p-6 font-display font-bold text-primary">Biofil</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-6 text-slate-500">{row.classic}</td>
                    <td className="p-6 text-primary font-bold">{row.biofil}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-8">
            Réalisations récentes sur le terrain
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Quelques exemples d'installations Biofil réalisées avec nos clients.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectImages.map((image) => (
              <div
                key={image.src}
                className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white space-y-8">
          <h2 className="text-4xl lg:text-6xl font-display font-extrabold">
            Passez à une solution durable dès aujourd’hui
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Ne continuez pas à dépenser dans une fosse qui vous pose problème.
            Passez à une solution moderne, propre et durable.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <Link
              href="/contact"
              className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:bg-slate-50 transition-all hover:-translate-y-1"
            >
              Demander un devis gratuit
            </Link>
            <a
              href="https://wa.me/237655830459"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl flex items-center justify-center space-x-3 hover:bg-black transition-all hover:-translate-y-1"
            >
              <MessageCircle size={24} />
              <span>WhatsApp : +237 6 55 83 04 59</span>
            </a>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm font-bold uppercase tracking-widest opacity-80">
            <span>✔ Réponse rapide</span>
            <span>✔ Devis gratuit</span>
            <span>✔ Conseils d'experts</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-extrabold text-slate-900 text-center mb-12">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Est-ce que le système nécessite une vidange ?",
                a: "Non, aucune vidange n’est nécessaire grâce au processus biologique de décomposition.",
              },
              {
                q: "Est-ce que ça sent mauvais ?",
                a: "Non, le système est conçu pour être totalement inodore grâce à sa structure hermétique.",
              },
              {
                q: "Est-ce adapté au Cameroun ?",
                a: "Oui, parfaitement adapté aux conditions locales, incluant les zones marécageuses.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100"
              >
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
