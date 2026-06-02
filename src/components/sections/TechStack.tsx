"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Briefcase, Users } from "lucide-react";
import { SkillBadge } from "@/components/ui";
import { portfolioData } from "@/data/portfolio";

const categories = [
  { icon: Code, label: "Desarrollo", key: "technical" as const },
  { icon: Briefcase, label: "Gestión & Herramientas", key: "tools" as const },
  { icon: Users, label: "Habilidades Blandas", key: "soft" as const },
];

export default function TechStack() {
  const { skills } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center">
            Habilidades
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-center leading-relaxed">
            Tecnologías y herramientas que utilizo para crear soluciones de software
          </p>
        </motion.div>

        <div ref={ref} className="space-y-12">
          {categories.map(({ icon: Icon, label, key }, catIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg border border-border bg-surface flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-text-primary">
                  {label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {skills[key].map((skill, index) => (
                  <SkillBadge key={skill} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
