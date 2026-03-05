"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Linkedin } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integration point — connect to your backend or form service
    setSubmitted(true);
  };

  const projectTypes = ["Web App", "Mobile App", "Cloud / DevOps", "AI Integration", "Other"];

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-purple-brand/15 blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-magenta-brand/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-dm tracking-[0.25em] text-purple-soft/60 uppercase mb-4">
            Let's Talk
          </span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
            Start Your <span className="text-gradient">Project</span>
          </h2>
          <p className="text-purple-soft/60 font-dm max-w-lg mx-auto">
            Got an idea? We'd love to hear it. Reach out and let's figure out
            what we can build together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-syne font-bold text-2xl text-white mb-4">
                We're Ready When You Are
              </h3>
              <p className="text-purple-soft/60 font-dm text-sm leading-relaxed mb-8">
                Whether you're a startup with a bold vision or an enterprise
                team tackling a complex challenge — we show up, listen, and get
                things done.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:hello@katal.pk"
                  className="flex items-center gap-3 text-purple-soft/70 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg border border-purple-brand/30 bg-purple-brand/10 flex items-center justify-center group-hover:border-purple-brand/60 transition-colors">
                    <Mail size={16} className="text-purple-soft" />
                  </div>
                  <span className="font-dm text-sm">hello@katal.pk</span>
                </a>
                <a
                  href="https://www.https://www.linkedin.com/company/katal-technologies/-technologies/"
                  className="flex items-center gap-3 text-purple-soft/70 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg border border-purple-brand/30 bg-purple-brand/10 flex items-center justify-center group-hover:border-purple-brand/60 transition-colors">
                    <Linkedin size={16} className="text-purple-soft" />
                  </div>
                  <span className="font-dm text-sm">katal-technologies</span>
                </a>
              </div>
            </div>

            {/* Bottom quote */}
            <div className="mt-10 p-5 rounded-xl border border-purple-brand/20 bg-surface/60">
              <p className="text-purple-soft/70 font-dm text-sm italic leading-relaxed">
                "Every great product starts with a great idea — our job is to
                make sure yours doesn't stay just an idea for long."
              </p>
              <p className="text-purple-soft/40 font-dm text-xs mt-2">— Katal Team</p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 rounded-2xl border border-purple-brand/30 bg-surface/70">
                <div className="w-16 h-16 rounded-full bg-brand-gradient flex items-center justify-center mb-5">
                  <Send size={24} className="text-white" />
                </div>
                <h3 className="font-syne font-bold text-2xl text-white mb-3">
                  Message Sent!
                </h3>
                <p className="text-purple-soft/60 font-dm text-sm">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-7 rounded-2xl border border-purple-brand/20 bg-surface/70 backdrop-blur-sm space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-dm text-purple-soft/60 mb-2 tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-void border border-purple-brand/20 text-white placeholder-purple-soft/30 font-dm text-sm focus:outline-none focus:border-purple-brand/60 focus:ring-1 focus:ring-purple-brand/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-dm text-purple-soft/60 mb-2 tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-void border border-purple-brand/20 text-white placeholder-purple-soft/30 font-dm text-sm focus:outline-none focus:border-purple-brand/60 focus:ring-1 focus:ring-purple-brand/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-dm text-purple-soft/60 mb-2 tracking-wide">
                    Project Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() =>
                          setFormState({ ...formState, type })
                        }
                        className={`px-4 py-2 text-xs font-dm rounded-lg border transition-all duration-200 ${
                          formState.type === type
                            ? "border-purple-brand bg-purple-brand/20 text-white"
                            : "border-purple-brand/20 text-purple-soft/60 hover:border-purple-brand/40"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-dm text-purple-soft/60 mb-2 tracking-wide">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Describe your idea, goals, and any technical requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-void border border-purple-brand/20 text-white placeholder-purple-soft/30 font-dm text-sm focus:outline-none focus:border-purple-brand/60 focus:ring-1 focus:ring-purple-brand/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-dm font-semibold text-sm relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-brand-gradient" />
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[linear-gradient(135deg,#B040FF_0%,#FF40FB_100%)]" />
                  <span className="absolute inset-px rounded-xl bg-gradient-to-b from-white/10 to-transparent" />
                  <span className="relative">Send Message</span>
                  <Send size={15} className="relative group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
