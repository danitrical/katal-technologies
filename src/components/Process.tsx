"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We listen first. Deep-dive into your goals, constraints, and users to fully understand what you're building and why.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Architecture",
    description:
      "We design the technical blueprint — selecting the right stack, infrastructure, and patterns before writing a single line of code.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "Agile sprints, clean code, regular demos. You're always in the loop and never surprised by what ships.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "Production-ready deployment with CI/CD pipelines, monitoring, and zero-downtime releases. We ship like we mean it.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Growth",
    description:
      "Post-launch support, performance optimization, and feature iteration. We're your long-term tech partner, not just a vendor.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[600px] rounded-full bg-magenta-brand/8 blur-[100px] translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-dm tracking-[0.25em] text-purple-soft/60 uppercase mb-4">
            How We Work
          </span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-purple-soft/60 font-dm max-w-xl mx-auto">
            A transparent, structured approach that delivers results without the
            chaos.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-brand/40 via-magenta-brand/40 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex items-start gap-6 md:gap-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse md:text-right"
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div
                    className={`p-6 rounded-2xl border border-purple-brand/20 bg-surface/70 backdrop-blur-sm hover:border-purple-brand/40 transition-all duration-300 group ${
                      i % 2 !== 0 ? "md:ml-auto" : ""
                    } max-w-md`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-brand/15 border border-purple-brand/30 flex items-center justify-center flex-shrink-0">
                        <step.icon size={18} className="text-purple-soft" />
                      </div>
                      <div>
                        <span className="text-xs font-dm text-purple-soft/50 tracking-widest">
                          STEP {step.number}
                        </span>
                        <h3 className="font-syne font-bold text-lg text-white leading-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-purple-soft/60 font-dm text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex flex-shrink-0 w-5 h-5 rounded-full bg-brand-gradient ring-4 ring-void mt-6 self-start relative z-10" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
