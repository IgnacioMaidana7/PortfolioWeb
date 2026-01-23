"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-slate-100/80 dark:bg-slate-950 border-t border-slate-300 dark:border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-center md:text-left">
            <p className="text-slate-900 dark:text-slate-50 font-semibold">
              {personalInfo.name}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {personalInfo.title}
            </p>
          </div>

          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {currentYear} Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
