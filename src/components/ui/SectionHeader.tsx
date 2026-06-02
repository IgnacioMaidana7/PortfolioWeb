"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  children?: ReactNode;
}

export default function SectionHeader({
  label,
  title,
  titleHighlight,
  description,
  children,
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {/* Technical prefix label */}
      <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-mono mb-3">
        <span className="opacity-40 select-none">{'// '}</span>
        <span className="uppercase tracking-widest font-medium">{label}</span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mt-1">
        {title}
        {titleHighlight && (
          <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-sky-400">
            {titleHighlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}

      {children}
    </motion.div>
  );
}
