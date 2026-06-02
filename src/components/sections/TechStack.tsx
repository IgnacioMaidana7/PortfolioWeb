"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Briefcase, Users } from "lucide-react";
import { SkillBadge, SectionHeader } from "@/components/ui";
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
        <SectionHeader
          title="Habilidades"
          description="Tecnologías y herramientas que utilizo para crear soluciones de software"
        />

        <div ref={ref} className="space-y-12">
          {categories.map(({ icon: Icon, label, key }, catIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <Icon className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold text-text-primary">
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
