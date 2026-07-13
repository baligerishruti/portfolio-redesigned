"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.74 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

export default function Contact() {
  const handleEmailClick = () => {
    const email = "shruti.m.baligeri@gmail.com";
    const subject = "Let's Connect!";
    const body = "Hi,\n\nI'd like to get in touch with you about...";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const socials = [
    { icon: Mail, href: "mailto:shruti.m.baligeri@gmail.com", label: "Email" },
    { icon: LinkedInIcon, href: "https://www.linkedin.com/in/shrutibm", label: "LinkedIn" },
    { icon: GitHubIcon, href: "https://github.com/baligerishruti", label: "GitHub" },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container-custom text-center">
        <p className="eyebrow mb-3">Get in touch</p>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title mb-6"
        >
          Let&apos;s build something reliable
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Have a role, a project, or a hard frontend problem to talk through?
          I&apos;m always glad to hear about it.
        </motion.p>

        <button onClick={handleEmailClick} className="btn-primary mb-12">
          Send me an email
        </button>

        <div className="flex justify-center gap-6">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-11 h-11 flex items-center justify-center border transition-colors"
                style={{ borderColor: "var(--line)", color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--signal)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
