"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Users } from "lucide-react";
import { SkillBadge, SectionHeader } from "@/components/ui";
import { portfolioData } from "@/data/portfolio";

export default function TechStack() {
  const { skills } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-24 bg-background"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Habilidades"
          title="Tech Stack"
          description="Tecnologías y herramientas que utilizo para crear soluciones de software"
        />

        <div ref={ref} className="space-y-12">
          {/* Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                Desarrollo
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.technical.map((skill, index) => (
                <SkillBadge key={skill} skill={skill} color="indigo" index={index} />
              ))}
            </div>
          </motion.div>

          {/* Tools & Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-500/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                Gestión & Herramientas
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((tool, index) => (
                <SkillBadge key={tool} skill={tool} color="violet" index={index} />
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                Habilidades Blandas
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.soft.map((skill, index) => (
                <SkillBadge key={skill} skill={skill} color="emerald" index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
