"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Target, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const aboutStats = [
  { value: "4", label: "Proyectos" },
  { value: "15+", label: "Tecnologías" },
  { value: "2", label: "Roles: Dev + PM" },
];

export default function About() {
  const { personalInfo } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left — Main content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-mono mb-3">
                <span className="opacity-40">{'// '}</span>
                <span className="uppercase tracking-widest font-medium">Sobre mí</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mt-2">
                Construyendo el futuro,
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-sky-500 dark:from-emerald-400 dark:to-sky-400">
                  {" "}línea por línea
                </span>
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <MapPin className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Stats mini-row */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-surface border border-border text-center"
                >
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Feature cards */}
          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
            <motion.div
              className="group p-6 rounded-2xl bg-emerald-50/80 dark:bg-emerald-500/5 border border-emerald-200 dark:border-emerald-500/20 hover:border-emerald-400 dark:hover:border-emerald-500/40 shadow-sm transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-500/20 transition-colors">
                <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-slate-900 dark:text-slate-50 font-semibold mb-2">
                Orientado a Objetivos
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Experiencia liderando equipos con metodologías ágiles SCRUM y Kanban.
              </p>
            </motion.div>

            <motion.div
              className="group p-6 rounded-2xl bg-sky-50/80 dark:bg-sky-500/5 border border-sky-200 dark:border-sky-500/20 hover:border-sky-400 dark:hover:border-sky-500/40 shadow-sm transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-500/10 flex items-center justify-center mb-4 group-hover:bg-sky-200 dark:group-hover:bg-sky-500/20 transition-colors">
                <Code2 className="w-6 h-6 text-sky-600 dark:text-sky-400" />
              </div>
              <h3 className="text-slate-900 dark:text-slate-50 font-semibold mb-2">
                Full Stack Developer
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Desarrollo end-to-end desde el frontend hasta la base de datos.
              </p>
            </motion.div>

            <motion.div
              className="sm:col-span-2 p-6 rounded-2xl bg-linear-to-r from-emerald-50 via-sky-50 to-teal-50 dark:from-emerald-600/8 dark:via-sky-600/8 dark:to-teal-600/8 border border-emerald-300 dark:border-emerald-500/20 shadow-sm"
              whileHover={{ scale: 1.01 }}
            >
              <p className="text-center text-slate-700 dark:text-slate-300">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  Buscando mi primera experiencia IT
                </span>{" "}
                con bases sólidas en desarrollo y gestión de proyectos tecnológicos.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
