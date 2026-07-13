"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container-custom text-center font-mono text-xs" style={{ color: "var(--muted)" }}>
        <p>© {currentYear} Shruti Baligeri 
          {/* — Built with Next.js &amp; Tailwind CSS */}
        </p>
      </div>
    </footer>
  );
}
