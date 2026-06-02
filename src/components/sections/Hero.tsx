"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { ProfilePicture } from "@/components/ui";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { personalInfo } = portfolioData;

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
            {/* Mobile profile picture */}
            <motion.div
              className="flex lg:hidden mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <ProfilePicture
                src="/images/Foto_Perfil.jpg"
                alt="Ignacio Maidana"
                size="md"
              />
            </motion.div>

            {/* Name: mask-reveal treatment — text slides up from behind overflow-hidden container */}
            <div className="mb-6">
              <h1>
                {/* First name: blur-fade in */}
                <div className="overflow-hidden">
                  <motion.span
                    className="block text-2xl font-medium text-text-secondary tracking-wide leading-snug"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  >
                    Ignacio
                  </motion.span>
                </div>

                {/* Last name: dramatic mask reveal */}
                <div className="overflow-hidden">
                  <motion.span
                    className="block text-7xl md:text-8xl lg:text-[88px] font-black text-text-primary leading-none tracking-[-0.02em]"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  >
                    Maidana
                  </motion.span>
                </div>
              </h1>

              {/* Orange underline — draws in after name reveals */}
              <motion.div
                className="h-0.5 bg-primary mt-4 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              />
            </div>

            <motion.p
              className="text-base font-medium text-primary mb-4 tracking-wide"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              className="text-text-secondary text-base leading-relaxed max-w-md mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              Desarrollador Frontend en Cloudnet Solutions. Ingeniería en
              Sistemas con experiencia en desarrollo Full Stack y gestión ágil
              de proyectos tecnológicos.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors duration-200 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail className="w-4 h-4" />
                Contáctame
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("projects")}
                className="flex items-center gap-2 px-7 py-3.5 border border-border text-text-primary font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Ver Proyectos
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Profile picture (desktop) */}
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
