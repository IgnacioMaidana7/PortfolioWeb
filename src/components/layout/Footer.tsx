"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-center md:text-left">
            <p className="font-semibold text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-sky-500 dark:from-emerald-400 dark:to-sky-400">
              {personalInfo.name}
            </p>
            <p className="text-slate-500 dark:text-slate-500 text-sm mt-0.5">
              {personalInfo.title}
            </p>
          </div>

          <p className="text-slate-400 dark:text-slate-600 text-sm font-mono">
            © {currentYear} · Todos los derechos reservados
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
