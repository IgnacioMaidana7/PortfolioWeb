"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Loader2,
} from "lucide-react";
import { SectionHeader } from "@/components/ui";
import { portfolioData } from "@/data/portfolio";

interface ContactInfoItem {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string | null;
}

export default function Contact() {
  const { personalInfo } = portfolioData;
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldMap: { [key: string]: string } = {
      user_name: "name",
      user_email: "email",
      message: "message",
    };
    setFormData({ ...formData, [fieldMap[name] || name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsLoading(true);
    setSubmitStatus("idle");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo: ContactInfoItem[] = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Teléfono", value: `+54 ${personalInfo.phone}`, href: `tel:+54${personalInfo.phone}` },
    { icon: MapPin, label: "Ubicación", value: personalInfo.location, href: null },
  ];

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-sm";

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Contacto"
          title="Hablemos"
          description="¿Tienes un proyecto en mente o una oportunidad laboral? Me encantaría escucharte."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Tu nombre"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="tu@email.com"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Cuéntame sobre tu proyecto u oportunidad..."
                  required
                  disabled={isLoading}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-emerald-600 to-sky-600 dark:from-emerald-500 dark:to-sky-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
              >
                {isLoading ? (
                  <><Loader2 className="w-5 h-5 animate-spin" />Enviando...</>
                ) : (
                  <><Send className="w-5 h-5" />Enviar Propuesta</>
                )}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30 text-emerald-700 dark:text-emerald-400 text-center font-medium"
                >
                  ¡Mensaje enviado con éxito!
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 text-red-700 dark:text-red-400 text-center font-medium"
                >
                  Hubo un error, intenta de nuevo
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">{item.label}</p>
                      <p className="text-slate-900 dark:text-slate-50 font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social links */}
            <div className="pt-6 border-t border-slate-200 dark:border-border">
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Encuéntrame en</p>
              <div className="flex gap-4">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-border flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:border-emerald-500/40 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-border flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:border-sky-500/40 hover:bg-sky-50 dark:hover:bg-sky-500/10 transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              className="p-6 rounded-2xl bg-linear-to-br from-emerald-50 to-sky-50 dark:from-emerald-600/8 dark:to-sky-600/8 border border-emerald-300 dark:border-emerald-500/20 shadow-sm"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                ¿Listo para trabajar juntos?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                Estoy buscando mi primera experiencia IT y estoy comprometido a dar
                lo mejor de mí en cada proyecto.
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
