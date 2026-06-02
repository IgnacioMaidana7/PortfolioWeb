"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui";
import { portfolioData } from "@/data/portfolio";

const NAV_ITEMS = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Trayectoria", href: "#timeline" },
  { label: "Contacto", href: "#contact" },
] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("#hero")}
              className="text-xl font-bold cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-sky-500 dark:from-emerald-400 dark:to-sky-400">
                {portfolioData.personalInfo.name}
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 text-sm font-medium transition-colors cursor-pointer relative group"
                  whileHover={{ y: -1 }}
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </motion.button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <motion.button
                className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800/50 flex items-center justify-center text-slate-700 dark:text-slate-300 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <div className="bg-background/95 backdrop-blur-lg border-b border-border p-6">
              <div className="flex flex-col gap-4">
                {NAV_ITEMS.map((item) => (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 text-lg font-medium py-2 text-left cursor-pointer transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
