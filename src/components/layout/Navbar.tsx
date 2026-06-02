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
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("#hero")}
              className="text-base font-bold text-text-primary hover:text-primary transition-colors duration-200 cursor-pointer tracking-tight"
            >
              {portfolioData.personalInfo.name}
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-7">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-text-secondary hover:text-text-primary text-sm font-medium transition-colors duration-200 cursor-pointer relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <motion.button
                className="w-9 h-9 rounded-lg border border-border bg-surface flex items-center justify-center text-text-secondary cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <div className="bg-background/98 backdrop-blur-lg border-b border-border px-6 py-4">
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-text-secondary hover:text-primary text-base font-medium py-2.5 text-left cursor-pointer transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
