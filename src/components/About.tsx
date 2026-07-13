"use client";

import { motion } from "framer-motion";

const log = [
  { tag: "v2024.10", role: "Tech Lead, Frontend", note: "Mizzen Digital — present" },
  { tag: "v2024.05", role: "Senior Software Engineer", note: "Zbyte Technologies" },
  { tag: "v2017.02", role: "Senior Software Engineer", note: "Lendingkart Technologies" },
];

export default function About() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: "var(--panel)" }}>
      <div className="container-custom">
        <p className="eyebrow mb-3">About</p>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title mb-12"
        >
          Nine years, three companies, one focus
        </motion.h2>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              I&apos;m a Tech Lead and Senior Frontend Engineer building scalable,
              high-performance web applications in React, Angular, and
              TypeScript. My work spans enterprise fintech and maritime
              platforms, taken from architecture through production.
            </p>
            <p className="mb-4 text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              I specialize in frontend architecture, reusable component
              libraries, and predictable state management with NgRx, Redux,
              and RxJS &mdash; the kind of foundation that keeps large
              applications maintainable years after they ship.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              As a lead, I mentor engineers, run code reviews, and push
              AI-assisted workflows (Figma MCP, coding agents) into the
              delivery pipeline &mdash; without lowering the bar on quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="panel p-6"
          >
            <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "var(--muted)" }}>
              Build Log
            </p>
            <div className="space-y-0">
              {log.map((entry, i) => (
                <div
                  key={entry.tag}
                  className="flex gap-4 py-4"
                  style={{ borderTop: i === 0 ? "none" : "1px solid var(--line)" }}
                >
                  <span className="font-mono text-sm shrink-0" style={{ color: "var(--signal)" }}>
                    {entry.tag}
                  </span>
                  <div>
                    <p className="font-display font-semibold text-base">{entry.role}</p>
                    <p className="font-mono text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                      {entry.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
