"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Target, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { personalInfo } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
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
          {/* Left side - Main content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.span
                className="text-indigo-500 dark:text-indigo-400 text-sm font-medium uppercase tracking-wider"
                variants={itemVariants}
              >
                Sobre mí
              </motion.span>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mt-2"
                variants={itemVariants}
              >
                Construyendo el futuro,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500 dark:from-indigo-400 dark:to-violet-400">
                  {" "}línea por línea
                </span>
              </motion.h2>
            </div>

            <motion.p
              className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed"
              variants={itemVariants}
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400"
              variants={itemVariants}
            >
              <MapPin className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
              <span>{personalInfo.location}</span>
            </motion.div>
          </motion.div>

          {/* Right side - Feature cards */}
          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-2 gap-4"
          >
            <motion.div
              className="group p-6 rounded-2xl bg-indigo-50/80 dark:bg-slate-800/50 border border-indigo-200 dark:border-slate-700/50 hover:border-indigo-400 dark:hover:border-indigo-500/30 shadow-sm transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-500/20 transition-colors">
                <Target className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-slate-900 dark:text-slate-50 font-semibold mb-2">
                Orientado a Objetivos
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Experiencia liderando equipos con metodologías ágiles SCRUM y Kanban.
              </p>
            </motion.div>

            <motion.div
              className="group p-6 rounded-2xl bg-violet-50/80 dark:bg-slate-800/50 border border-violet-200 dark:border-slate-700/50 hover:border-violet-400 dark:hover:border-violet-500/30 shadow-sm transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-200 dark:group-hover:bg-violet-500/20 transition-colors">
                <Code2 className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-slate-900 dark:text-slate-50 font-semibold mb-2">
                Full Stack Developer
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Desarrollo end-to-end desde el frontend hasta la base de datos.
              </p>
            </motion.div>

            <motion.div
              className="sm:col-span-2 p-6 rounded-2xl bg-gradient-to-r from-indigo-50 via-violet-50 to-indigo-50 dark:from-indigo-600/10 dark:via-violet-600/10 dark:to-indigo-600/10 border border-indigo-300 dark:border-indigo-500/20 shadow-sm"
              whileHover={{ scale: 1.01 }}
            >
              <p className="text-center text-slate-700 dark:text-slate-300">
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
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
