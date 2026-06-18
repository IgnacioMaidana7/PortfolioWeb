"use client";

import { motion } from "framer-motion";
import { Images } from "lucide-react";

interface ProjectDetails {
  challenge: string;
  solution: string;
  decisions: string;
  obstacles: string;
  myRole: string;
}

interface Project {
  id: string;
  title: string;
  role: string;
  desc: string;
  tech: string[];
  highlights: string[];
  images: string[];
  details?: ProjectDetails;
  repo?: string;
  demo?: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  isFirst?: boolean;
}

const layoutTransition = {
  type: "spring" as const,
  stiffness: 200,
  damping: 25,
};

export default function ProjectCard({ project, onClick, isFirst = false }: ProjectCardProps) {
  return (
    <motion.div
      layoutId={`project-${project.id}`}
      transition={layoutTransition}
      onClick={onClick}
      className={`group relative rounded-xl bg-surface border border-border overflow-hidden hover:border-primary/40 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer ${isFirst ? "md:col-span-2 lg:col-span-2" : ""}`}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
      whileTap={{ scale: 0.98 }}
      style={{ willChange: "transform" }}
    >
      <div className="relative p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-xs font-medium text-primary uppercase tracking-wider">
            {project.role}
          </span>

          {project.images.length > 0 && (
            <div className="flex items-center gap-1.5 text-text-secondary">
              <Images className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">{project.images.length}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {project.desc}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-center gap-2 text-sm text-text-secondary"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-md bg-background text-text-secondary border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
    </motion.div>
  );
}
