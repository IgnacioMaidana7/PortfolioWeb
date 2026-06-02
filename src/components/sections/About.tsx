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
    visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left — Main content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
              Sobre mí
            </h2>

            <p className="text-text-secondary text-lg leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-lg border border-border bg-background text-center"
                >
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-secondary mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Feature cards */}
          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
            <motion.div
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center mb-4 group-hover:border-primary/40 transition-colors">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-text-primary font-semibold mb-2">
                Orientado a Objetivos
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Experiencia liderando equipos con metodologías ágiles SCRUM y Kanban.
              </p>
            </motion.div>

            <motion.div
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center mb-4 group-hover:border-primary/40 transition-colors">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-text-primary font-semibold mb-2">
                Full Stack Developer
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Desarrollo end-to-end desde el frontend hasta la base de datos.
              </p>
            </motion.div>

            <motion.div
              className="sm:col-span-2 p-6 rounded-xl border border-border bg-background text-center"
              whileHover={{ scale: 1.01 }}
            >
              <p className="text-text-secondary text-sm leading-relaxed">
                <span className="text-primary font-semibold">
                  Desarrollador Frontend en Cloudnet Solutions
                </span>{" "}
                con experiencia en desarrollo Full Stack y gestión de proyectos.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
