"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "SYS-01",
    title: "Voyage Management System & Laytime Calculator",
    description:
      "Maritime platform for vessel scheduling, voyage tracking, and demurrage/laytime calculations built with modular React and Angular architecture.",
    tech: ["React", "Angular", "TypeScript", "Maritime Ops"],
  },
  {
    id: "SYS-02",
    title: "Marine Map Tool",
    description:
      "Interactive vessel tracking and route visualization experience for marine operations, optimized for performance and real-time usability.",
    tech: ["React", "Angular", "Maps", "Performance"],
  },
  {
    id: "SYS-03",
    title: "VMLite Dashboard",
    description:
      "Enterprise dashboard with RBAC, reusable component libraries, and modular architecture designed for high-volume internal and partner users.",
    tech: ["Angular", "RBAC", "Modular Architecture"],
  },
  {
    id: "SYS-04",
    title: "Dedupe Dashboard",
    description:
      "React-based fraud-detection workflow that surfaced duplicate records in real time and improved operational review efficiency.",
    tech: ["React", "Redux", "Fraud Ops"],
  },
  {
    id: "SYS-05",
    title: "Clarra Dashboard",
    description:
      "Reactive communication module built with RxJS-driven data streams for responsive and reliable user interactions.",
    tech: ["Angular", "RxJS", "Reactive UI"],
  },
  {
    id: "SYS-06",
    title: "Customer Dashboard",
    description:
      "Responsive onboarding workflow optimized for both mobile and desktop experiences, improving customer journey completion.",
    tech: ["Angular", "Angular Material", "Responsive UI"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20" style={{ backgroundColor: "var(--panel)" }}>
      <div className="container-custom">
        <p className="eyebrow mb-3">Selected work</p>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title mb-12"
        >
          Systems I&apos;ve shipped
        </motion.h2>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group panel p-6 transition-colors"
              style={{ borderColor: "var(--line)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs tracking-widest" style={{ color: "var(--signal)" }}>
                  {project.id}
                </span>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--data)" }} />
              </div>

              <h3 className="font-display text-xl font-semibold mb-3">
                {project.title}
              </h3>
              <p className="mb-5 leading-relaxed" style={{ color: "var(--muted)" }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2.5 py-1 border"
                    style={{ borderColor: "var(--line)", color: "var(--data)" }}
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
