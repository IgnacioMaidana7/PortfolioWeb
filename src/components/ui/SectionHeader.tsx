"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionHeaderProps {
  label?: string;
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
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-center mb-16"
    >
      {label && (
        <p className="text-sm font-medium text-primary uppercase tracking-[0.15em] mb-3">
          {label}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
        {title}
        {titleHighlight && (
          <span className="text-primary">{titleHighlight}</span>
        )}
      </h2>

      {description && (
        <p className="text-text-secondary mt-4 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}

      {children}
    </motion.div>
  );
}
