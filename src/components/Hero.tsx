"use client";

import { motion } from "framer-motion";

const readouts = [
  { label: "PAGE LOAD", value: "-45%", note: "avg. improvement" },
  { label: "UPTIME", value: "99.9%", note: "production apps" },
  { label: "LIGHTHOUSE", value: "90+", note: "from baseline 60s" },
  { label: "APIS SHIPPED", value: "15+", note: "third-party integrations" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16"
    >
      <div className="container-custom grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">Senior Frontend Engineer</p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] mb-6">
            Shruti Baligeri
          </h1>

          <p className="font-mono text-sm md:text-base mb-6" style={{ color: "var(--data)" }}>
            Angular · React · TypeScript · Micro-Frontends
          </p>

          <p className="max-w-xl text-lg leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
            9+ years building and scaling enterprise web applications &mdash; from
            fintech dashboards to maritime operations platforms. I ship
            interfaces that hold up under real production load, and I
            instrument everything I build.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="#projects" className="btn-primary flex items-center gap-2 group">
              View the work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="panel"
        >
          <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "var(--line)" }}>
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>
              System Readout
            </span>
            <span className="flex items-center gap-2 font-mono text-xs" style={{ color: "var(--data)" }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "var(--data)" }} />
              LIVE
            </span>
          </div>

          <div className="grid grid-cols-2">
            {readouts.map((r, i) => (
              <div
                key={r.label}
                className="px-5 py-6 border-r border-b last:border-r-0"
                style={{
                  borderColor: "var(--line)",
                  borderRightWidth: i % 2 === 0 ? 1 : 0,
                  borderBottomWidth: i < 2 ? 1 : 0,
                }}
              >
                <p className="font-mono text-[11px] tracking-[0.15em] mb-2" style={{ color: "var(--muted)" }}>
                  {r.label}
                </p>
                <p className="font-display text-3xl font-semibold mb-1" style={{ color: "var(--signal)" }}>
                  {r.value}
                </p>
                <p className="font-mono text-[11px]" style={{ color: "var(--muted)" }}>
                  {r.note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
