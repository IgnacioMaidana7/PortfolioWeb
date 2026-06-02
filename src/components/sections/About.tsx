"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const aboutStats = [
  { value: "4", label: "Proyectos" },
  { value: "15+", label: "Tecnologías" },
  { value: "2", label: "Roles" },
];

export default function About() {
  const { personalInfo } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left — Main content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <div className="h-0.5 w-10 bg-primary mb-5" />
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
                Sobre mí
              </h2>
            </div>

            <p className="text-text-secondary text-base leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Inline stats without boxes */}
            <div className="flex items-center gap-6 pt-2">
              {aboutStats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  <div>
                    <div className="text-3xl font-black text-primary leading-none">{stat.value}</div>
                    <div className="text-xs text-text-secondary mt-1">{stat.label}</div>
                  </div>
                  {i < aboutStats.length - 1 && (
                    <div className="w-px h-8 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Feature blocks (no icon boxes) */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-text-primary mb-1.5">
                  Orientado a Objetivos
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Experiencia liderando equipos con metodologías ágiles SCRUM y Kanban.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-text-primary mb-1.5">
                  Full Stack Developer
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Desarrollo end-to-end desde el frontend hasta la base de datos.
                </p>
              </div>
            </div>

            <div className="pt-5 border-t border-border">
              <p className="text-text-secondary text-sm leading-relaxed">
                <span className="text-text-primary font-semibold">
                  Desarrollador Frontend en Cloudnet Solutions
                </span>{" "}
                con experiencia en desarrollo Full Stack y gestión de proyectos tecnológicos.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
