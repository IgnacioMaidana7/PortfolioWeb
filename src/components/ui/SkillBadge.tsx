"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  GitBranch,
  Layout,
  Server,
  Terminal,
  Trello,
  Cpu,
  FileCode,
  Boxes,
  Settings,
  CheckCircle2,
  FlaskConical,
} from "lucide-react";

interface SkillBadgeProps {
  skill: string;
  color: "emerald" | "sky" | "teal";
  index?: number;
}

const getSkillIcon = (skill: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    JavaScript: <FileCode className="w-5 h-5" />,
    Python: <Terminal className="w-5 h-5" />,
    "React.js": <Layout className="w-5 h-5" />,
    "Node.js": <Server className="w-5 h-5" />,
    Express: <Server className="w-5 h-5" />,
    "Next.js": <Boxes className="w-5 h-5" />,
    "Django REST": <Code className="w-5 h-5" />,
    "SQL (MySQL, PostgreSQL)": <Database className="w-5 h-5" />,
    "Git/GitHub": <GitBranch className="w-5 h-5" />,
    Jest: <CheckCircle2 className="w-5 h-5" />,
    Supertest: <FlaskConical className="w-5 h-5" />,
    "IoT (ESP32)": <Cpu className="w-5 h-5" />,
    Linux: <Terminal className="w-5 h-5" />,
    Jira: <Settings className="w-5 h-5" />,
    Trello: <Trello className="w-5 h-5" />,
    "Microsoft 365": <Layout className="w-5 h-5" />,
    "Figma (Básico)": <Layout className="w-5 h-5" />,
  };
  return iconMap[skill] || <Code className="w-5 h-5" />;
};

const colorClasses = {
  emerald:
    "bg-emerald-100 border-emerald-300 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-300 dark:hover:bg-emerald-500/20",
  sky:
    "bg-sky-100 border-sky-300 text-sky-700 hover:bg-sky-200 dark:bg-sky-500/10 dark:border-sky-500/30 dark:text-sky-300 dark:hover:bg-sky-500/20",
  teal:
    "bg-teal-100 border-teal-300 text-teal-700 hover:bg-teal-200 dark:bg-teal-500/10 dark:border-teal-500/30 dark:text-teal-300 dark:hover:bg-teal-500/20",
};

export default function SkillBadge({ skill, color, index = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${colorClasses[color]} transition-all duration-200 cursor-default`}
    >
      {getSkillIcon(skill)}
      <span className="text-sm font-medium">{skill}</span>
    </motion.div>
  );
}
