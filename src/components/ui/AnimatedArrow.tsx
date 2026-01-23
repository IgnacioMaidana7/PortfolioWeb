"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AnimatedArrowProps {
  onClick?: () => void;
}

export default function AnimatedArrow({ onClick }: AnimatedArrowProps) {
  return (
    <motion.button
      onClick={onClick}
      className="flex flex-col items-center gap-1 cursor-pointer group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      aria-label="Scroll hacia abajo"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-8 h-8 text-slate-400 dark:text-slate-500 group-hover:text-indigo-400 transition-colors" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.15,
        }}
      >
        <ChevronDown className="w-8 h-8 text-slate-300 dark:text-slate-600 group-hover:text-indigo-300 transition-colors -mt-5" />
      </motion.div>
    </motion.button>
  );
}
