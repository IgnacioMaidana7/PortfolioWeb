"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { SectionHeader, ProjectCard, ProjectModal } from "@/components/ui";
import { portfolioData } from "@/data/portfolio";

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
}

export default function Projects() {
  const { projects } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Portfolio"
          title="Proyectos Destacados"
          description="Proyectos académicos que demuestran mis habilidades técnicas y de liderazgo"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal with AnimatePresence for smooth enter/exit */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
