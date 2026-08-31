"use client";

import { useEffect, useRef, useState } from "react";
import { profile, stats } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: 50, y: 40 });
  const [mounted, setMounted] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const handleMouseMove = (event: MouseEvent) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      setCursor({
        x: Math.min(100, Math.max(0, x)),
        y: Math.min(100, Math.max(0, y)),
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reducedMotion]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      {!reducedMotion && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700"
          style={{
            opacity: mounted ? 1 : 0,
            background: `radial-gradient(600px circle at ${cursor.x}% ${cursor.y}%, rgba(36, 87, 230, 0.06), transparent 65%)`,
          }}
        />
      )}

      <div className="page-container-wide relative py-24 sm:py-30 lg:py-32">
        <div
          className={`max-w-4xl transition-all duration-1000 ease-smooth ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="section-label mb-6">{profile.location}</p>

          <h1 className="text-[40px] sm:text-[56px] lg:text-[72px] font-semibold tracking-[-0.03em] leading-[1.05] text-ink text-balance mb-5">
            {profile.name}
          </h1>

          <p className="text-[20px] sm:text-[24px] text-ink font-medium tracking-tight leading-snug max-w-2xl mb-5">
            {profile.tagline}
          </p>

          <p className="text-[17px] sm:text-[18px] text-ink-muted leading-relaxed max-w-xl mb-10">
            Founder, engineer, and creator - from scaling a channel to over 200K+
            subscribers to shipping mobile apps and AI tools.
          </p>

          <div className="flex flex-wrap gap-3 mb-16 sm:mb-20">
            <MagneticButton
              href={`mailto:${profile.email}`}
              className="h-11 px-5 rounded-md bg-ink text-white text-[14px] font-medium hover:bg-surface-dark transition-colors duration-200"
            >
              Get in touch
            </MagneticButton>
            <MagneticButton
              href="#projects"
              className="h-11 px-5 rounded-md border border-divider bg-surface-elevated text-ink text-[14px] font-medium hover:border-ink/20 hover:shadow-card transition-all duration-200"
            >
              View work
            </MagneticButton>
            <a
              href={profile.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-4 rounded-md text-[14px] font-medium text-ink-muted hover:text-ink inline-flex items-center transition-colors duration-200"
            >
              @FutFlicksFC
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-divider rounded-xl overflow-hidden border border-divider">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-surface-elevated px-5 py-5 sm:py-6"
                style={{
                  transitionDelay: reducedMotion ? "0ms" : `${200 + i * 60}ms`,
                }}
              >
                <p className="text-[26px] sm:text-[32px] font-semibold tracking-tight text-ink tabular-nums">
                  {stat.value}
                </p>
                <p className="text-[12px] sm:text-[13px] text-ink-muted mt-1 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
