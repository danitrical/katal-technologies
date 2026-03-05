"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-purple-brand/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-magenta-brand/15 blur-[120px]" />
        <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full bg-purple-brand/10 blur-[80px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(155,48,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(155,48,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Diagonal lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9B30FF" stopOpacity="0" />
              <stop offset="50%" stopColor="#9B30FF" stopOpacity="1" />
              <stop offset="100%" stopColor="#E040FB" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(6)].map((_, i) => (
            <line
              key={i}
              x1={`${-20 + i * 30}%`}
              y1="0%"
              x2={`${30 + i * 30}%`}
              y2="100%"
              stroke="url(#lineGrad)"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-brand/60"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-brand/30 bg-purple-brand/10 backdrop-blur-sm mb-8"
        >
          <Sparkles size={14} className="text-purple-soft" />
          <span className="text-xs font-dm text-purple-soft tracking-widest uppercase">
            Software Services Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-dm font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6"
        >
          <span className="text-white">We Turn</span>
          <br />
          <span className="text-gradient glow-text">Ideas</span>{" "}
          <span className="text-white">Into</span>
          <br />
          <span className="text-white">Powerful </span>
          <span className="text-gradient">Software</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-purple-soft/70 font-dm text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We partner with startups, SMEs, and enterprises to design and deliver
          web, mobile, and cloud solutions — built to last, shipped to impress.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative flex items-center gap-2 px-8 py-4 text-base font-dm font-semibold text-white rounded-xl overflow-hidden"
          >
            <span className="absolute inset-0 bg-brand-gradient" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[linear-gradient(135deg,#B040FF_0%,#FF40FB_100%)]" />
            <span className="absolute inset-px rounded-xl bg-gradient-to-b from-white/10 to-transparent" />
            <span className="relative">Start a Project</span>
            <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#services"
            className="flex items-center gap-2 px-8 py-4 text-base font-dm font-medium text-purple-soft hover:text-white rounded-xl border border-purple-brand/30 hover:border-purple-brand/60 bg-purple-brand/5 hover:bg-purple-brand/10 transition-all duration-300"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-20 pt-10 border-t border-purple-brand/15 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "5+", label: "Projects Delivered" },
            { value: "1", label: "Years of Expertise" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "4", label: "Core Services" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-syne font-bold text-3xl text-gradient-brand mb-1">
                {stat.value}
              </div>
              <div className="text-purple-soft/60 text-sm font-dm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent pointer-events-none" />
    </section>
  );
}
