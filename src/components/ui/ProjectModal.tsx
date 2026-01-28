"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Sparkles, Target, Lightbulb, Wrench, AlertTriangle, User } from "lucide-react";
import ImageGallery from "./ImageGallery";

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

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

// Optimized transition - lighter spring for better performance
const layoutTransition = {
    type: "spring" as const,
    stiffness: 200,
    damping: 25,
};

// Detail section component
interface DetailSectionProps {
    icon: React.ReactNode;
    title: string;
    content: string;
}

function DetailSection({ icon, title, content }: DetailSectionProps) {
    return (
        <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
                {icon}
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                    {title}
                </h4>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-6">
                {content}
            </p>
        </div>
    );
}

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
            {/* Backdrop - removed backdrop-blur for performance */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/70 z-40"
                onClick={onClose}
                style={{ willChange: "opacity" }}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 pointer-events-none">
                <motion.div
                    layoutId={`project-${project.id}`}
                    transition={layoutTransition}
                    className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface border border-border shadow-2xl pointer-events-auto"
                    style={{ willChange: "transform" }}
                >
                    {/* Close button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.15, duration: 0.15 }}
                        onClick={onClose}
                        className="sticky top-4 left-[calc(100%-3.5rem)] z-10 w-10 h-10 rounded-full bg-slate-200/90 dark:bg-slate-700/90 hover:bg-slate-300 dark:hover:bg-slate-600 flex items-center justify-center transition-colors"
                        aria-label="Cerrar"
                    >
                        <X className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    </motion.button>

                    <div className="p-6 md:p-8 pt-2">
                        {/* Header */}
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                                {project.role}
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6">
                            {project.title}
                        </h2>

                        {/* Two Column Layout */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left Column - Image Gallery */}
                            <div className="space-y-6">
                                <ImageGallery images={project.images} projectTitle={project.title} />

                                {/* Highlights */}
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                                        Características Principales
                                    </h3>
                                    <ul className="space-y-2">
                                        {project.highlights.map((highlight) => (
                                            <li
                                                key={highlight}
                                                className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm"
                                            >
                                                <span className="w-2 h-2 mt-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 flex-shrink-0" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                                        Tecnologías
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1.5 text-xs font-medium rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Structured Description */}
                            <div className="space-y-2">
                                {project.details ? (
                                    <>
                                        <DetailSection
                                            icon={<Target className="w-4 h-4 text-red-500" />}
                                            title="El Desafío"
                                            content={project.details.challenge}
                                        />
                                        <DetailSection
                                            icon={<Lightbulb className="w-4 h-4 text-yellow-500" />}
                                            title="La Solución"
                                            content={project.details.solution}
                                        />
                                        <DetailSection
                                            icon={<Wrench className="w-4 h-4 text-blue-500" />}
                                            title="Decisiones Técnicas Clave"
                                            content={project.details.decisions}
                                        />
                                        <DetailSection
                                            icon={<AlertTriangle className="w-4 h-4 text-orange-500" />}
                                            title="Retos Superados"
                                            content={project.details.obstacles}
                                        />
                                        <DetailSection
                                            icon={<User className="w-4 h-4 text-indigo-500" />}
                                            title="Mi Rol"
                                            content={project.details.myRole}
                                        />
                                    </>
                                ) : (
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                                            Descripción
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {project.desc}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}
