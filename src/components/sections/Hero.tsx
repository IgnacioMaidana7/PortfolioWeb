"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { ProfilePicture } from "@/components/ui";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { personalInfo } = portfolioData;
  const [firstName, lastName] = personalInfo.name.split(" ");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center bg-background overflow-hidden"
    >
      <div className="absolute inset-0 hero-dots" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-24 lg:py-0">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* Left: Text */}
          <div>
            <motion.h1
              className="text-6xl md:text-7xl lg:text-[88px] font-bold text-text-primary tracking-tight leading-[0.9] mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {firstName}
              <br />
              {lastName}
            </motion.h1>

            <motion.p
              className="text-lg font-medium text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              className="text-text-secondary text-base leading-relaxed max-w-105 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
            >
              Desarrollador Frontend en Cloudnet Solutions. Ingeniería en
              Sistemas con experiencia en desarrollo Full Stack y gestión ágil
              de proyectos tecnológicos.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
            >
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors duration-200 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4" />
                Contáctame
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("projects")}
                className="flex items-center gap-2 px-7 py-3.5 border border-border text-text-primary font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver Proyectos
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Profile picture */}
          <div className="hidden lg:flex justify-center">
            <ProfilePicture
              src="/images/Foto_Perfil.jpg"
              alt="Ignacio Maidana"
              size="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
