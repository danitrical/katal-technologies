"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "Frontend",
    color: "#9B30FF",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Angular"],
  },
  {
    category: "Backend",
    color: "#C050FF",
    techs: ["Node.js", "NestJS", "FastAPI", "Django", "GraphQL", "Kafka"],
  },
  {
    category: "Database",
    color: "#D050F0",
    techs: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis", "Oracle"],
  },
  {
    category: "Cloud & DevOps",
    color: "#E040FB",
    techs: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
  {
    category: "AI / ML",
    color: "#B860FF",
    techs: ["OpenAI", "LangChain", "RAG", "PyTorch", "Pinecone", "Gemini"],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-brand/10 blur-[100px]" />
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
            Our Toolkit
          </span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-purple-soft/60 font-dm max-w-xl mx-auto">
            Battle-tested technologies we use to build reliable, scalable, and
            modern software products.
          </p>
        </motion.div>

        <div className="space-y-5">
          {techStack.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-xl border border-purple-brand/15 bg-surface/60 backdrop-blur-sm hover:border-purple-brand/35 transition-colors duration-300 group"
            >
              {/* Category label */}
              <div className="sm:w-36 flex-shrink-0">
                <span
                  className="font-syne font-semibold text-sm"
                  style={{ color: group.color }}
                >
                  {group.category}
                </span>
              </div>

              {/* Divider */}
              <div
                className="hidden sm:block w-px h-6 flex-shrink-0"
                style={{ background: `${group.color}40` }}
              />

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {group.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-dm rounded-lg transition-all duration-200 hover:scale-105 cursor-default"
                    style={{
                      background: `${group.color}12`,
                      color: `${group.color}CC`,
                      border: `1px solid ${group.color}25`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
