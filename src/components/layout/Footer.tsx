"use client";

import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            <p className="font-semibold text-text-primary text-sm">
              {personalInfo.name}
            </p>
            <p className="text-text-secondary text-xs mt-0.5">
              {personalInfo.title}
            </p>
          </div>

          <p className="text-text-secondary text-xs">
            &copy; {currentYear} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
