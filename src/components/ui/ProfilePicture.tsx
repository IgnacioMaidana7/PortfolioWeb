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
            {/* Animated gradient border ring — emerald → sky */}
            <motion.div
                className={`${sizeClasses[size]} rounded-full p-1 bg-linear-to-br from-emerald-500 via-sky-500 to-emerald-500 dark:from-emerald-400 dark:via-sky-400 dark:to-emerald-400`}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
                <div className="w-full h-full rounded-full p-1 bg-background">
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
                    </motion.div>
                </div>
            </motion.div>

            {/* Pulsing emerald glow */}
            <motion.div
                className={`absolute inset-0 ${sizeClasses[size]} rounded-full bg-linear-to-br from-emerald-500/20 to-sky-500/20 dark:from-emerald-400/20 dark:to-sky-400/20 blur-xl -z-10`}
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
        </motion.div>
    );
}
