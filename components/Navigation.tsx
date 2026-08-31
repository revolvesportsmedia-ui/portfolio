"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "debate", label: "Debate" },
  { id: "community", label: "Community" },
  { id: "skills", label: "Skills" },
];

export function Navigation() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      for (const section of sections.reverse()) {
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActive(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-smooth border-b ${
          scrolled
            ? "nav-blur-scrolled border-divider shadow-subtle"
            : "nav-blur border-transparent"
        }`}
      >
        <div className="page-container-wide h-14 flex items-center justify-between">
          <a
            href="#"
            className="text-[15px] font-semibold text-ink tracking-tight"
          >
            {profile.name.split(" ")[0]}
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3.5 py-1.5 rounded-md text-[13px] font-medium transition-all duration-300 ease-spring ${
                  active === item.id
                    ? "text-ink bg-surface-elevated shadow-subtle"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden w-9 h-9 rounded-md border border-divider bg-surface-elevated flex flex-col items-center justify-center gap-1"
          >
            <span
              className={`block w-4 h-px bg-ink transition-transform duration-300 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-4 h-px bg-ink transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-4 h-px bg-ink transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-ink/20"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute top-14 left-0 right-0 nav-blur-scrolled border-b border-divider p-5">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-md text-[15px] font-medium transition-colors ${
                    active === item.id
                      ? "text-ink bg-surface-elevated"
                      : "text-ink-muted"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
