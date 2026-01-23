"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
      <span className="text-indigo-400 text-sm font-medium uppercase tracking-wider">
        {label}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mt-2">
        {title}
        {titleHighlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
            {titleHighlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}
