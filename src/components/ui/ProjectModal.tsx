"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Sparkles, Target, Lightbulb, Wrench, AlertTriangle, User, Github, ExternalLink } from "lucide-react";
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
    repo?: string;
    demo?: string;
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
                <h4 className="font-semibold text-text-primary text-sm">
                    {title}
                </h4>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed pl-6">
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
                        className="sticky top-4 left-[calc(100%-3.5rem)] z-10 w-10 h-10 rounded-full bg-surface border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
                        aria-label="Cerrar"
                    >
                        <X className="w-5 h-5 text-text-secondary" />
                    </motion.button>

                    <div className="p-6 md:p-8 pt-2">
                        {/* Header */}
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-5 h-5 text-primary" />
                            <span className="text-xs font-medium text-primary uppercase tracking-wider">
                                {project.role}
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
                            {project.title}
                        </h2>

                        {/* Two Column Layout */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left Column - Image Gallery */}
                            <div className="space-y-6">
                                <ImageGallery images={project.images} projectTitle={project.title} />

                                {/* Highlights */}
                                <div>
                                    <h3 className="text-lg font-semibold text-text-primary mb-3">
                                        Características Principales
                                    </h3>
                                    <ul className="space-y-2">
                                        {project.highlights.map((highlight) => (
                                            <li
                                                key={highlight}
                                                className="flex items-start gap-3 text-text-secondary text-sm"
                                            >
                                                <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h3 className="text-lg font-semibold text-text-primary mb-3">
                                        Tecnologías
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1.5 text-xs font-medium rounded-md bg-background text-text-secondary border border-border"
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
                                            icon={<Target className="w-4 h-4 text-primary" />}
                                            title="El Desafío"
                                            content={project.details.challenge}
                                        />
                                        <DetailSection
                                            icon={<Lightbulb className="w-4 h-4 text-primary" />}
                                            title="La Solución"
                                            content={project.details.solution}
                                        />
                                        <DetailSection
                                            icon={<Wrench className="w-4 h-4 text-primary" />}
                                            title="Decisiones Técnicas Clave"
                                            content={project.details.decisions}
                                        />
                                        <DetailSection
                                            icon={<AlertTriangle className="w-4 h-4 text-primary" />}
                                            title="Retos Superados"
                                            content={project.details.obstacles}
                                        />
                                        <DetailSection
                                            icon={<User className="w-4 h-4 text-primary" />}
                                            title="Mi Rol"
                                            content={project.details.myRole}
                                        />
                                    </>
                                ) : (
                                    <div>
                                        <h3 className="text-lg font-semibold text-text-primary mb-3">
                                            Descripción
                                        </h3>
                                        <p className="text-text-secondary leading-relaxed">
                                            {project.desc}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Links — repo & demo (only if provided) */}
                    {(project.repo || project.demo) && (
                        <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-border">
                            {project.repo && (
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-background border border-border text-text-primary text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    Repositorio
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-hover transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Demo en vivo
                                </a>
                            )}
                        </div>
                    )}
                </motion.div>
            </div>
        </>
    );
}
