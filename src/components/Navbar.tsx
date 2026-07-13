"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleResumeClick = () => {
    window.open("/Shruti_Baligeri_Tech_Lead_Resume.pdf", "_blank");
  };

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{ backgroundColor: "color-mix(in srgb, var(--bg) 85%, transparent)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="container-custom py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--data)" }} />
          <span className="font-mono text-sm tracking-wide">Shruti Baligeri</span>
        </Link>

        <ul className="hidden md:flex gap-8 font-mono text-sm">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="transition-colors"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--signal)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button onClick={handleResumeClick} className="btn-primary !px-4 !py-2 text-sm">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}
