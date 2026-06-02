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

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

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
    <div
      ref={ref}
      className={`mb-16 ${isCenter ? "text-center" : ""}`}
    >
      {/* Orange accent rule — scaleX draw on entry */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, ease }}
        className={`h-0.5 w-10 bg-primary mb-5 ${isCenter ? "mx-auto origin-center" : "origin-left"}`}
      />

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease }}
      >
        {title}
        {titleHighlight && (
          <span className="text-primary">{titleHighlight}</span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          className={`text-text-secondary mt-4 leading-relaxed ${isCenter ? "max-w-2xl mx-auto" : "max-w-lg"}`}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.18, ease }}
        >
          {description}
        </motion.p>
      )}

      {children}
    </div>
  );
}
