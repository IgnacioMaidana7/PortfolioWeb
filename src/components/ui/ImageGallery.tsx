"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageOff, Pause, Play } from "lucide-react";
import Image from "next/image";

interface ImageGalleryProps {
    images: string[];
    projectTitle: string;
    autoPlayInterval?: number;
}

export default function ImageGallery({
    images,
    projectTitle,
    autoPlayInterval = 4000
}: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isPlaying || !images || images.length <= 1) return;

        const interval = setInterval(goToNext, autoPlayInterval);
        return () => clearInterval(interval);
    }, [isPlaying, images, autoPlayInterval, goToNext]);

    // Pause auto-play when user interacts
    const handleManualNavigation = (index: number) => {
        setIsPlaying(false);
        setCurrentIndex(index);
        // Resume auto-play after 8 seconds of inactivity
        setTimeout(() => setIsPlaying(true), 8000);
    };

    if (!images || images.length === 0) {
        return (
            <div className="w-full aspect-[4/3] rounded-xl bg-surface border border-border flex flex-col items-center justify-center gap-3">
                <ImageOff className="w-12 h-12 text-text-secondary" />
                <p className="text-sm text-text-secondary">
                    No hay imágenes disponibles
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {/* Main Image - Adaptive aspect ratio */}
            <div className="relative w-full aspect-[4/3] md:aspect-[3/2] rounded-xl overflow-hidden bg-surface border border-border">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`${projectTitle} - Imagen ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={currentIndex === 0}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={() => {
                                handleManualNavigation(
                                    currentIndex === 0 ? images.length - 1 : currentIndex - 1
                                );
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors backdrop-blur-sm"
                            aria-label="Imagen anterior"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                            onClick={() => {
                                handleManualNavigation(
                                    currentIndex === images.length - 1 ? 0 : currentIndex + 1
                                );
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors backdrop-blur-sm"
                            aria-label="Siguiente imagen"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    </>
                )}

                {/* Bottom controls bar */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-between">
                    {/* Play/Pause button */}
                    {images.length > 1 && (
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm"
                            aria-label={isPlaying ? "Pausar" : "Reproducir"}
                        >
                            {isPlaying ? (
                                <Pause className="w-4 h-4 text-white" />
                            ) : (
                                <Play className="w-4 h-4 text-white ml-0.5" />
                            )}
                        </button>
                    )}

                    {/* Progress dots */}
                    {images.length > 1 && (
                        <div className="flex gap-1.5">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleManualNavigation(index)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? "w-6 bg-white"
                                            : "w-1.5 bg-white/50 hover:bg-white/70"
                                        }`}
                                    aria-label={`Ir a imagen ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Image Counter */}
                    <div className="px-2 py-1 rounded-full bg-black/40 text-white text-xs font-medium backdrop-blur-sm">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            </div>

            {/* Thumbnails - scrollable */}
            {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                    {images.map((image, index) => (
                        <button
                            key={image}
                            onClick={() => handleManualNavigation(index)}
                            className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${index === currentIndex
                                    ? "border-primary ring-2 ring-primary/20 scale-105"
                                    : "border-transparent hover:border-border opacity-70 hover:opacity-100"
                                }`}
                        >
                            <Image
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="80px"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
