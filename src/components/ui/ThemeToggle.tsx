"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

/**
 * ThemeToggle Component
 * 
 * Lógica de persistencia:
 * 1. Revisar localStorage.getItem("theme")
 * 2. Si es null, revisar window.matchMedia("(prefers-color-scheme: dark)")
 * 3. Default: "dark"
 * 
 * Estilo: Ghost variant con transición suave
 */
export default function ThemeToggle() {
  // Estado del tema y mounted para evitar hidratación incorrecta
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  // Inicialización - Sigue el flujo de prioridad especificado
  useEffect(() => {
    // 1. Revisar localStorage
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    
    let initialTheme: "light" | "dark";
    
    if (savedTheme) {
      // Usar tema guardado en localStorage
      initialTheme = savedTheme;
    } else {
      // 2. Si es null, revisar preferencia del sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      // 3. Default: "dark"
      initialTheme = prefersDark ? "dark" : "dark"; // Default siempre dark
    }
    
    // Aplicar tema inicial
    setTheme(initialTheme);
    
    // Manipular el DOM
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Marcar como montado para evitar flash
    setMounted(true);
  }, []);

  // Acción de Toggle
  const toggleTheme = () => {
    // 1. Cambiar estado
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
    // 2. Guardar en localStorage
    localStorage.setItem("theme", newTheme);
    
    // 3. Manipular el DOM: add/remove clase "dark"
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Retornar null si !mounted para evitar flash de contenido
  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="
        relative w-10 h-10 rounded-xl
        bg-transparent hover:bg-slate-200/80 dark:hover:bg-slate-800/80
        flex items-center justify-center
        text-slate-600 dark:text-slate-400
        hover:text-slate-900 dark:hover:text-slate-100
        transition-colors duration-300
        cursor-pointer
        border border-transparent hover:border-slate-300/50 dark:hover:border-slate-700/50
      "
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {theme === "dark" ? (
            <Moon className="w-5 h-5" strokeWidth={1.5} />
          ) : (
            <Sun className="w-5 h-5" strokeWidth={1.5} />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
