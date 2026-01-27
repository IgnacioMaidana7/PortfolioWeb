"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import ImageGallery from "./ImageGallery";

interface Project {
    id: string;
    title: string;
    role: string;
    desc: string;
    tech: string[];
    highlights: string[];
    images: string[];
}

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

// Optimized spring transition for smooth morphing
const springTransition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    mass: 1,
};

// Fade in for content that appears only in modal
const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.15, duration: 0.3 }
    },
    exit: { opacity: 0, transition: { duration: 0.1 } }
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    // Scroll lock and blur header
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";
        document.body.setAttribute("data-modal-open", "true");

        return () => {
            document.body.style.overflow = originalStyle;
            document.body.removeAttribute("data-modal-open");
        };
    }, []);

    // ESC key to close
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
                <motion.div
                    layoutId={`project-card-${project.id}`}
                    transition={springTransition}
                    className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface border border-border shadow-2xl pointer-events-auto"
                >
                    {/* Close button */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.2, duration: 0.2 }}
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-200/90 dark:bg-slate-700/90 hover:bg-slate-300 dark:hover:bg-slate-600 flex items-center justify-center transition-colors backdrop-blur-sm"
                        aria-label="Cerrar"
                    >
                        <X className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    </motion.button>

                    <motion.div
                        layoutId={`project-content-${project.id}`}
                        transition={springTransition}
                        className="p-6 md:p-8"
                    >
                        {/* Header */}
                        <motion.div
                            layoutId={`project-role-${project.id}`}
                            transition={springTransition}
                            className="flex items-center gap-2 mb-4"
                        >
                            <Sparkles className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                                {project.role}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            layoutId={`project-title-${project.id}`}
                            transition={springTransition}
                            className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6"
                        >
                            {project.title}
                        </motion.h2>

                        {/* Image Gallery - Fade in */}
                        <motion.div
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="mb-8"
                        >
                            <ImageGallery images={project.images} projectTitle={project.title} />
                        </motion.div>

                        {/* Description - Fade in */}
                        <motion.div
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="mb-6"
                        >
                            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                                Descripción
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {project.desc}
                            </p>
                        </motion.div>

                        {/* Highlights - Fade in */}
                        <motion.div
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="mb-6"
                        >
                            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                                Características Principales
                            </h3>
                            <ul className="space-y-3">
                                {project.highlights.map((highlight) => (
                                    <li
                                        key={highlight}
                                        className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                                    >
                                        <span className="w-2 h-2 mt-2 rounded-full bg-indigo-500 dark:bg-indigo-400 flex-shrink-0" />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                                Tecnologías Utilizadas
                            </h3>
                            <motion.div
                                layoutId={`project-tech-${project.id}`}
                                transition={springTransition}
                                className="flex flex-wrap gap-2"
                            >
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 text-sm font-medium rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700/50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}
