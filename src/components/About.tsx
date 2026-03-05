"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, Zap, Shield } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Speed Without Sacrifice",
    description: "We ship fast — but never at the expense of quality, security, or scalability.",
  },
  {
    icon: Users,
    title: "Real Partnership",
    description: "We don't disappear after standup. We're invested in your success like a co-founder.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Clean architecture, proper documentation, and maintainable code. No technical debt bombs.",
  },
  {
    icon: CheckCircle2,
    title: "Full Transparency",
    description: "Weekly updates, open communication, and no surprise bills. You always know where things stand.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] rounded-full bg-purple-brand/10 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-dm tracking-[0.25em] text-purple-soft/60 uppercase mb-4">
              Why Katal
            </span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Your Idea Deserves{" "}
              <span className="text-gradient">More Than a Dev Shop</span>
            </h2>
            <p className="text-purple-soft/60 font-dm text-base leading-relaxed mb-6">
              At Katal, we believe every great product starts with a great idea
              — and our job is to make sure yours doesn't stay just an idea for
              long.
            </p>
            <p className="text-purple-soft/60 font-dm text-base leading-relaxed mb-8">
              We partner with you from the first napkin sketch to post-launch
              scale. Our team brings engineering depth, product instinct, and
              genuine curiosity to every project we take on.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-dm font-medium text-white rounded-xl bg-brand-gradient hover:opacity-90 transition-opacity"
            >
              Let's Build Together
            </a>
          </motion.div>

          {/* Right: Pillars grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-xl border border-purple-brand/20 bg-surface/70 hover:border-purple-brand/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-brand/15 border border-purple-brand/25 flex items-center justify-center mb-4">
                  <p.icon size={18} className="text-purple-soft" />
                </div>
                <h4 className="font-syne font-semibold text-white text-base mb-2">
                  {p.title}
                </h4>
                <p className="text-purple-soft/55 font-dm text-sm leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
