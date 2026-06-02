"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/ui";
import { portfolioData } from "@/data/portfolio";

type TimelineColor = "emerald" | "sky" | "teal";

interface TimelineItem {
  type: "education" | "project";
  title: string;
  subtitle: string;
  period: string;
  icon: typeof GraduationCap | typeof Briefcase;
  color: TimelineColor;
}

const COLOR_CLASSES: Record<TimelineColor, { bg: string; border: string; icon: string; dot: string }> = {
  emerald: {
    bg: "bg-emerald-50 dark:bg-emerald-500/5",
    border: "border-emerald-300 dark:border-emerald-500/25",
    icon: "text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-500",
  },
  sky: {
    bg: "bg-sky-50 dark:bg-sky-500/5",
    border: "border-sky-300 dark:border-sky-500/25",
    icon: "text-sky-600 dark:text-sky-400",
    dot: "bg-sky-500",
  },
  teal: {
    bg: "bg-teal-50 dark:bg-teal-500/5",
    border: "border-teal-300 dark:border-teal-500/25",
    icon: "text-teal-600 dark:text-teal-400",
    dot: "bg-teal-500",
  },
};

export default function Timeline() {
  const { education, projects } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineItems: TimelineItem[] = [
    {
      type: "education",
      title: education[0].degree,
      subtitle: education[0].institution,
      period: education[0].period,
      icon: GraduationCap,
      color: "emerald",
    },
    {
      type: "project",
      title: projects[0].role,
      subtitle: projects[0].title,
      period: "2025",
      icon: Briefcase,
      color: "sky",
    },
    {
      type: "project",
      title: projects[1].role,
      subtitle: projects[1].title,
      period: "2024",
      icon: Briefcase,
      color: "sky",
    },
    {
      type: "project",
      title: projects[2].role,
      subtitle: projects[2].title,
      period: "2023",
      icon: Briefcase,
      color: "teal",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="timeline" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          label="Trayectoria"
          title="Educación & Experiencia"
          description="Mi camino en el desarrollo de software y gestión de proyectos"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-linear-to-b from-emerald-500 via-sky-500 to-teal-500" />

          <div className="space-y-8">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const colors = COLOR_CLASSES[item.color];

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-6 w-5 h-5 rounded-full ${colors.dot} border-4 border-background -translate-x-1/2`}
                  />

                  {/* Card */}
                  <motion.div
                    className={`p-6 rounded-2xl ${colors.bg} border ${colors.border} shadow-sm transition-all duration-300`}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center shrink-0`}
                      >
                        <Icon className={`w-6 h-6 ${colors.icon}`} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-1">
                          <Calendar className="w-4 h-4 shrink-0" />
                          <span>{item.period}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
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
