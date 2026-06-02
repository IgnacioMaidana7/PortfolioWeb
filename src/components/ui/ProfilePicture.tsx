"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProfilePictureProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "hero";
}

const sizeClasses: Record<NonNullable<ProfilePictureProps["size"]>, string> = {
  sm: "w-24 h-24",
  md: "w-32 h-32 md:w-40 md:h-40",
  lg: "w-40 h-40 md:w-48 md:h-48",
  hero: "w-64 h-64 md:w-72 md:h-72",
};

const imageSizes: Record<NonNullable<ProfilePictureProps["size"]>, string> = {
  sm: "96px",
  md: "(max-width: 768px) 128px, 160px",
  lg: "(max-width: 768px) 160px, 192px",
  hero: "(max-width: 768px) 256px, 288px",
};

export default function ProfilePicture({ src, alt, size = "md" }: ProfilePictureProps) {
  return (
    <motion.div
      className="relative inline-block"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Orange ring */}
      <div className={`${sizeClasses[size]} rounded-full p-[3px] bg-primary`}>
        <div className="w-full h-full rounded-full bg-background p-[2px]">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              priority
              sizes={imageSizes[size]}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
