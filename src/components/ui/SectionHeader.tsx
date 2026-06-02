"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export default function SectionHeader({
  title,
  titleHighlight,
  description,
  align = "left",
  children,
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isCenter = align === "center";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-16 ${isCenter ? "text-center" : ""}`}
    >
      <div className={`h-0.5 w-10 bg-primary mb-5 ${isCenter ? "mx-auto" : ""}`} />

      <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
        {title}
        {titleHighlight && (
          <span className="text-primary">{titleHighlight}</span>
        )}
      </h2>

      {description && (
        <p className={`text-text-secondary mt-4 leading-relaxed ${isCenter ? "max-w-2xl mx-auto" : "max-w-lg"}`}>
          {description}
        </p>
      )}

      {children}
    </motion.div>
  );
}
