"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Green Minds",
    category: "Consulting SaaS",
    description:
      "Multi-tenant consulting management platform with secure authentication, RBAC, and an admin dashboard for end-to-end operations.",
    highlights: [
      "JWT auth + RBAC with secure account lockout",
      "Admin dashboard with CRUD and search/filtering",
      "React Query + Zod validated workflows",
    ],
    stack: ["NestJS", "PostgreSQL", "Next.js 15", "Redis"],
    accent: "#9B30FF",
  },
  {
    title: "Taxi Booking Management System",
    category: "Mobility Ops",
    description:
      "Self-hosted booking management system powering multi-role operations across an internal network.",
    highlights: [
      "JWT-secured APIs for driver, attendant, and client roles",
      "Enabled 150+ users to manage bookings and wage reporting",
      "Reduced admin overhead by 60% with automated weekly bundles and digital compliance docs",
    ],
    stack: ["Angular 13", "NestJS", "Prisma", "PostgreSQL"],
    accent: "#E040FB",
  },
  {
    title: "DwiseTech",
    category: "Company Website",
    description:
      "Public-facing website highlighting services, capabilities, and a clear path to inquiry for prospective clients.",
    highlights: [
      "Responsive, mobile-first layout",
      "Service-focused content structure",
      "Fast, accessible navigation",
    ],
    stack: ["Website", "UI/UX", "SEO"],
    accent: "#B860FF",
    link: "https://dwisetech.com/",
  },
  {
    title: "Addon",
    category: "Business Presence",
    description:
      "Brand-forward web presence with structured content to showcase offerings and contact pathways.",
    highlights: [
      "Clean, conversion-oriented layout",
      "Clear information architecture",
      "Optimized for readability",
    ],
    stack: ["Website", "Branding", "Content"],
    accent: "#C050FF",
    link: "https://addon.com.pk",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full bg-magenta-brand/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[520px] h-[520px] rounded-full bg-purple-brand/10 blur-[120px]" />
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
            Selected Work
          </span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-purple-soft/60 font-dm max-w-2xl mx-auto">
            A snapshot of the products we have designed, engineered, and scaled
            for ambitious teams across industries.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-purple-brand/20 bg-surface/70 backdrop-blur-sm p-7 card-hover overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 20% 20%, ${project.accent}22, transparent 60%)`,
                }}
              />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-dm tracking-[0.25em] uppercase text-purple-soft/60">
                    {project.category}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-purple-soft/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </div>

                <h3 className="font-syne font-bold text-2xl text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-purple-soft/60 font-dm text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="space-y-2 mb-5">
                  {project.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-dm">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: project.accent }}
                      />
                      <span className="text-purple-soft/70">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-dm rounded-full border"
                      style={{
                        borderColor: `${project.accent}35`,
                        color: project.accent,
                        background: `${project.accent}12`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-5 text-sm font-dm font-semibold text-white"
                  >
                    Visit site
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#contact"
            className="group relative flex items-center gap-2 px-6 py-3 rounded-xl text-white font-dm font-semibold text-sm overflow-hidden"
          >
            <span className="absolute inset-0 bg-brand-gradient" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[linear-gradient(135deg,#B040FF_0%,#FF40FB_100%)]" />
            <span className="absolute inset-px rounded-xl bg-gradient-to-b from-white/10 to-transparent" />
            <span className="relative">Start a Project</span>
            <ArrowUpRight size={16} className="relative group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
