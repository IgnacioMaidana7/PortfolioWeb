"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProfilePictureProps {
    src: string;
    alt: string;
    size?: "sm" | "md" | "lg";
}

export default function ProfilePicture({
    src,
    alt,
    size = "md",
}: ProfilePictureProps) {
    const sizeClasses = {
        sm: "w-24 h-24",
        md: "w-32 h-32 md:w-40 md:h-40",
        lg: "w-40 h-40 md:w-48 md:h-48",
    };

    return (
        <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            {/* Animated gradient border ring */}
            <motion.div
                className={`${sizeClasses[size]} rounded-full p-1 bg-gradient-to-br from-indigo-500 via-violet-500 to-indigo-500 dark:from-indigo-400 dark:via-violet-400 dark:to-indigo-400`}
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {/* Inner white/dark ring for spacing */}
                <div className="w-full h-full rounded-full p-1 bg-background">
                    {/* Image container with hover effect */}
                    <motion.div
                        className="relative w-full h-full rounded-full overflow-hidden shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 128px, 160px"
                        />

                        {/* Subtle overlay on hover */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-violet-500/0"
                            whileHover={{
                                background: [
                                    "linear-gradient(to bottom right, rgba(99, 102, 241, 0), rgba(139, 92, 246, 0))",
                                    "linear-gradient(to bottom right, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))",
                                ],
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* Pulsing glow effect */}
            <motion.div
                className={`absolute inset-0 ${sizeClasses[size]} rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20 dark:from-indigo-400/20 dark:to-violet-400/20 blur-xl -z-10`}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </motion.div>
    );
}
