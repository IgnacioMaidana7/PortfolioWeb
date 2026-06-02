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
  Package,
} from "lucide-react";

interface SkillBadgeProps {
  skill: string;
  index?: number;
}

const getSkillIcon = (skill: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    JavaScript: <FileCode className="w-4 h-4" />,
    Python: <Terminal className="w-4 h-4" />,
    "React.js": <Layout className="w-4 h-4" />,
    "Node.js": <Server className="w-4 h-4" />,
    Express: <Server className="w-4 h-4" />,
    "Next.js": <Boxes className="w-4 h-4" />,
    "Django REST": <Code className="w-4 h-4" />,
    "SQL (MySQL, PostgreSQL)": <Database className="w-4 h-4" />,
    "Git/GitHub": <GitBranch className="w-4 h-4" />,
    Jest: <CheckCircle2 className="w-4 h-4" />,
    Supertest: <FlaskConical className="w-4 h-4" />,
    "IoT (ESP32)": <Cpu className="w-4 h-4" />,
    Linux: <Terminal className="w-4 h-4" />,
    Docker: <Package className="w-4 h-4" />,
    Postman: <Code className="w-4 h-4" />,
    Jira: <Settings className="w-4 h-4" />,
    Trello: <Trello className="w-4 h-4" />,
    "Microsoft 365": <Layout className="w-4 h-4" />,
    "Figma (Básico)": <Layout className="w-4 h-4" />,
  };
  return iconMap[skill] || <Code className="w-4 h-4" />;
};

export default function SkillBadge({ skill, index = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.88 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border bg-surface text-text-secondary hover:border-primary hover:text-primary transition-colors duration-200 cursor-default text-sm font-medium"
    >
      {getSkillIcon(skill)}
      <span>{skill}</span>
    </motion.div>
  );
}
