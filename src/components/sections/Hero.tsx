"use client";

import { motion } from "framer-motion";
import { Mail, Terminal } from "lucide-react";
import { AnimatedArrow, ProfilePicture } from "@/components/ui";
import { portfolioData } from "@/data/portfolio";

const stats = [
  { value: "4", label: "Proyectos" },
  { value: "15+", label: "Tecnologías" },
  { value: "3+ años", label: "Ingeniería" },
];

export default function Hero() {
  const { personalInfo } = portfolioData;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle tech grid pattern */}
      <div className="absolute inset-0 hero-grid" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50/95 via-slate-50/80 to-emerald-50/30 dark:from-background/95 dark:via-background/85 dark:to-emerald-950/20" />

      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400/10 dark:bg-emerald-500/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-400/10 dark:bg-sky-500/8 rounded-full blur-3xl"
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.6, 0.4, 0.6] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Profile Picture */}
        <div className="mb-8">
          <ProfilePicture
            src="/images/Foto_Perfil.jpg"
            alt="Ignacio Maidana"
            size="lg"
          />
        </div>

        {/* Terminal-style availability badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-sm font-mono"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Terminal className="w-3.5 h-3.5 shrink-0" />
          <span>$ disponible_para_trabajar</span>
          <span
            className="w-1.5 h-4 bg-emerald-500 dark:bg-emerald-400 inline-block rounded-sm"
            style={{ animation: "blink 1s step-end infinite" }}
          />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-50 mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-sky-500 dark:from-emerald-400 dark:to-sky-400 font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {personalInfo.title}
        </motion.h2>

        <motion.p
          className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Transformando ideas en código limpio y experiencias digitales memorables.
          Listo para aportar valor a tu equipo.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="group flex items-center gap-2 px-8 py-4 bg-linear-to-r from-emerald-600 to-sky-600 dark:from-emerald-500 dark:to-sky-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5" />
            Contáctame
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("projects")}
            className="group flex items-center gap-2 px-8 py-4 border border-slate-300 dark:border-border text-slate-700 dark:text-slate-300 font-semibold rounded-full hover:border-emerald-500/50 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-emerald-50/60 dark:hover:bg-emerald-900/10 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Proyectos
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex items-center justify-center gap-8 sm:gap-16 mt-12 pt-8 border-t border-slate-200 dark:border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-500 mt-0.5 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <AnimatedArrow onClick={() => scrollToSection("about")} />
      </div>
    </section>
  );
}
