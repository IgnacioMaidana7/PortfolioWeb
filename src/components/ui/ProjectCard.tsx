"use client";

import { motion } from "framer-motion";
import { Sparkles, Images } from "lucide-react";

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

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
    isFirst?: boolean;
}

// Optimized transition
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
            className={`group relative rounded-2xl bg-surface border border-border overflow-hidden hover:border-indigo-400 dark:hover:border-indigo-500/30 shadow-sm transition-colors cursor-pointer ${isFirst ? "md:col-span-2 lg:col-span-2" : ""
                }`}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            style={{ willChange: "transform" }}
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 dark:from-indigo-600/5 dark:to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                        <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                            {project.role}
                        </span>
                    </div>

                    {/* Image indicator */}
                    {project.images.length > 0 && (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                            <Images className="w-3.5 h-3.5" />
                            <span className="text-xs font-medium">{project.images.length}</span>
                        </div>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {project.desc}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                    <ul className="space-y-2">
                        {project.highlights.map((highlight) => (
                            <li
                                key={highlight}
                                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-slate-200 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600/50"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom gradient line - Loading effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
        </motion.div>
    );
}
