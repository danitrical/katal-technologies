"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Cloud, Brain, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "From sleek landing pages to complex enterprise platforms. We architect scalable, performant web applications using React, Next.js, and Node.js.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
    gradient: "from-purple-brand/20 to-purple-brand/5",
    accent: "#9B30FF",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile experiences that feel native. We build for iOS and Android using React Native — one codebase, two platforms, zero compromise.",
    tags: ["React Native", "iOS", "Android", "Redux"],
    gradient: "from-magenta-brand/20 to-magenta-brand/5",
    accent: "#E040FB",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Infrastructure that scales with your ambitions. AWS, GCP, Kubernetes, CI/CD pipelines — we build the backbone your product runs on.",
    tags: ["AWS", "GCP", "Docker", "Kubernetes"],
    gradient: "from-purple-brand/20 to-magenta-brand/10",
    accent: "#B060EE",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Intelligent systems that actually work in production. RAG pipelines, LLM integrations, and custom ML models tailored to your business needs.",
    tags: ["OpenAI", "LangChain", "RAG", "Embeddings"],
    gradient: "from-magenta-brand/20 to-purple-brand/10",
    accent: "#D050F0",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-purple-brand/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-dm tracking-[0.25em] text-purple-soft/60 uppercase mb-4">
            What We Do
          </span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-purple-soft/60 font-dm max-w-xl mx-auto">
            End-to-end software development across the full stack — we cover
            every layer so you don't have to.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-purple-brand/20 bg-surface/80 backdrop-blur-sm p-7 card-hover cursor-pointer overflow-hidden"
            >
              {/* Card glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${svc.accent}18, transparent 60%)`,
                }}
              />

              {/* Top line accent */}
              <div
                className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${svc.accent}, transparent)`,
                }}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${svc.accent}30, ${svc.accent}10)`,
                    border: `1px solid ${svc.accent}40`,
                  }}
                >
                  <svc.icon size={22} style={{ color: svc.accent }} />
                </div>

                {/* Title + Arrow */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-syne font-bold text-xl text-white">
                    {svc.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-purple-soft/40 group-hover:text-purple-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-1 flex-shrink-0"
                  />
                </div>

                {/* Description */}
                <p className="text-purple-soft/60 font-dm text-sm leading-relaxed mb-5">
                  {svc.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-dm rounded-full border"
                      style={{
                        borderColor: `${svc.accent}35`,
                        color: svc.accent,
                        background: `${svc.accent}10`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
