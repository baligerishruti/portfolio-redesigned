"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frameworks & Libraries",
    skills: [ "Angular (v2–v19)", "RxJS", "NgRx", "RxJS", "React", "Redux", "AngularJS"],
  },
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "SCSS"],
  },
  {
    category: "Architecture",
    skills: ["Micro-Frontends", "Modular Architecture", "Lazy Loading", "RBAC", "HLD/LLD"],
  },
  {
    category: "Testing & Quality",
    skills: ["Cypress", "Robot Framework", "Lighthouse", "RUM", "Code Reviews"],
  },
  {
    category: "Analytics & Monitoring",
    skills: ["Mixpanel", "Hotjar", "Google Analytics", "WebEngage"],
  },
  {
    category: "Tooling",
    skills: ["Git", "CI/CD", "Figma MCP", "AI Coding Agents", "MySQL Workbench"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container-custom">
        <p className="eyebrow mb-3">Capabilities</p>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title mb-12"
        >
          Skills &amp; technologies
        </motion.h2>

        <div className="panel">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="grid md:grid-cols-[240px_1fr] gap-2 md:gap-8 px-6 py-5"
              style={{ borderTop: index === 0 ? "none" : "1px solid var(--line)" }}
            >
              <h3 className="font-mono text-xs tracking-widest uppercase pt-1" style={{ color: "var(--data)" }}>
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 border"
                    style={{ borderColor: "var(--line)", color: "var(--text)" }}
                  >
                    {skill}
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
