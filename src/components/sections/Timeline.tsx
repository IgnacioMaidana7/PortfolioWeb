"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/ui";
import { portfolioData } from "@/data/portfolio";

interface TimelineItem {
  type: "education" | "project";
  title: string;
  subtitle: string;
  period: string;
  icon: typeof GraduationCap | typeof Briefcase;
}

export default function Timeline() {
  const { education, projects } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineItems: TimelineItem[] = [
    {
      type: "project",
      title: "Desarrollador Frontend",
      subtitle: "Cloudnet Solutions",
      period: "Feb 2026 - Actualidad",
      icon: Briefcase,
    },
    {
      type: "education",
      title: education[0].degree,
      subtitle: education[0].institution,
      period: education[0].period,
      icon: GraduationCap,
    },
    {
      type: "project",
      title: projects[0].role,
      subtitle: projects[0].title,
      period: "2025",
      icon: Briefcase,
    },
    {
      type: "project",
      title: projects[1].role,
      subtitle: projects[1].title,
      period: "2024",
      icon: Briefcase,
    },
    {
      type: "project",
      title: projects[2].role,
      subtitle: projects[2].title,
      period: "2023",
      icon: Briefcase,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="timeline" className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          title="Trayectoria"
          description="Mi camino en el desarrollo de software y gestión de proyectos"
          align="center"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-20"
                >
                  {/* Dot */}
                  <div className="absolute left-6 w-5 h-5 rounded-full bg-primary border-4 border-background -translate-x-1/2" />

                  {/* Card */}
                  <motion.div
                    className="p-5 rounded-xl bg-background border border-border hover:border-primary/40 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-text-secondary text-xs mb-1.5">
                          <Calendar className="w-3.5 h-3.5 shrink-0" />
                          <span>{item.period}</span>
                        </div>
                        <h3 className="text-base font-semibold text-text-primary mb-1">
                          {item.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
