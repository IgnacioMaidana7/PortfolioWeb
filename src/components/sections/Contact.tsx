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
    "w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all text-sm";

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
            Hablemos
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente o una oportunidad laboral? Me encantaría escucharte.
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
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
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
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
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
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
                className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isLoading ? { scale: 1.01 } : {}}
                whileTap={!isLoading ? { scale: 0.99 } : {}}
              >
                {isLoading ? (
                  <><Loader2 className="w-4 h-4 animate-spin" />Enviando...</>
                ) : (
                  <><Send className="w-4 h-4" />Enviar mensaje</>
                )}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg border border-border bg-surface text-text-primary text-center text-sm font-medium"
                >
                  Mensaje enviado correctamente.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg border border-border bg-surface text-primary text-center text-sm font-medium"
                >
                  Hubo un error, intenta de nuevo.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-4 p-4 rounded-lg bg-surface border border-border hover:border-primary/40 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg border border-border bg-background flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs mb-0.5">{item.label}</p>
                    <p className="text-text-primary font-medium text-sm">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            <div className="pt-4 border-t border-border">
              <p className="text-text-secondary text-xs mb-3">Redes sociales</p>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-text-primary mb-2 text-sm">
                Abierto a nuevas oportunidades
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                Desarrollador Frontend en actividad, siempre abierto a proyectos desafiantes y oportunidades de crecimiento.
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-primary-hover transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                {personalInfo.email}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
