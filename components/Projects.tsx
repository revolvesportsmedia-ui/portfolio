"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { projects } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-22 sm:py-30">
      <div className="page-container-wide">
        <ScrollReveal>
          <SectionHeader
            label="Selected Work"
            title="Products built, shipped, and iterated."
            description="Real projects with real constraints - from mobile apps to AI-powered tools."
          />
        </ScrollReveal>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const [hover, setHover] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const isFeatured = index === 0;
  const isReversed = index === 1;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (reducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    cardRef.current.style.setProperty("--tx", `${x * 4}px`);
    cardRef.current.style.setProperty("--ty", `${y * 4}px`);
  };

  const handleMouseLeave = () => {
    setHover(false);
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--tx", "0px");
    cardRef.current.style.setProperty("--ty", "0px");
  };

  return (
    <ScrollReveal delay={index * 80}>
      <article
        ref={cardRef}
        onMouseEnter={() => setHover(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`group relative rounded-xl border border-divider bg-surface-elevated overflow-hidden transition-all duration-500 ease-spring ${
          hover ? "shadow-card-hover border-ink/10" : "shadow-card"
        }`}
        style={{
          transform: reducedMotion
            ? undefined
            : "translate(var(--tx, 0px), var(--ty, 0px))",
        }}
      >
        <div
          className={`grid ${
            isFeatured
              ? "lg:grid-cols-[1.1fr_0.9fr]"
              : isReversed
                ? "lg:grid-cols-[0.9fr_1.1fr]"
                : "lg:grid-cols-2"
          }`}
        >
          <div
            className={`relative p-8 sm:p-10 lg:p-12 flex flex-col justify-center ${
              isReversed ? "lg:order-2" : ""
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                0{index + 1}
              </span>
              <span className="h-px flex-1 bg-divider max-w-[48px]" />
            </div>

            <h3 className="text-[26px] sm:text-[32px] font-semibold tracking-tight text-ink mb-2">
              {project.name}
            </h3>
            <p className="text-[15px] text-ink-muted mb-6">{project.subtitle}</p>

            <p className="body-text mb-6">{project.description}</p>

            <ul className="space-y-3 mb-8">
              {project.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-[14px] sm:text-[15px] text-ink-muted leading-relaxed"
                >
                  <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`relative min-h-[240px] sm:min-h-[280px] lg:min-h-full border-t lg:border-t-0 border-divider bg-surface ${
              isReversed ? "lg:order-1 lg:border-r" : "lg:border-l"
            }`}
          >
            <ProjectVisual name={project.name} hover={hover} />
          </div>
        </div>

        <div
          className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-500 ease-spring ${
            hover ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
        />
      </article>
    </ScrollReveal>
  );
}

function ProjectVisual({ name, hover }: { name: string; hover: boolean }) {
  const visuals: Record<string, ReactNode> = {
    Forfeit: (
      <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
        <div
          className={`relative w-[180px] sm:w-[220px] aspect-[9/19] rounded-[28px] border-2 border-ink/10 bg-surface-elevated shadow-elevated transition-transform duration-700 ease-spring ${
            hover ? "scale-[1.03]" : "scale-100"
          }`}
        >
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-divider" />
          <div className="p-5 pt-8 space-y-3">
            <div className="h-2 w-20 rounded bg-ink/10" />
            <div className="h-16 rounded-lg bg-accent/8 border border-accent/15" />
            <div className="space-y-2">
              <div className="h-2 w-full rounded bg-divider" />
              <div className="h-2 w-4/5 rounded bg-divider" />
              <div className="h-2 w-3/5 rounded bg-divider" />
            </div>
            <div className="flex gap-2 pt-2">
              <div className="h-8 flex-1 rounded-md bg-ink" />
              <div className="h-8 w-8 rounded-md border border-divider" />
            </div>
          </div>
        </div>
      </div>
    ),
    SpecCheck: (
      <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
        <div
          className={`w-full max-w-[300px] transition-transform duration-700 ease-spring ${
            hover ? "scale-[1.02]" : "scale-100"
          }`}
        >
          <div className="rounded-lg border border-divider bg-surface-elevated p-5 shadow-card">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="h-2 w-24 rounded bg-divider" />
            </div>
            <div className="h-20 rounded-md bg-surface border border-divider p-3 mb-3">
              <div className="h-2 w-full rounded bg-divider mb-2" />
              <div className="h-2 w-5/6 rounded bg-divider" />
            </div>
            <div className="rounded-md border border-accent/20 bg-accent/5 p-3">
              <div className="h-2 w-16 rounded bg-accent/30 mb-2" />
              <div className="h-2 w-full rounded bg-accent/15" />
            </div>
          </div>
        </div>
      </div>
    ),
    "AI Carbon Footprint Calculator": (
      <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
        <div
          className={`grid grid-cols-3 gap-3 w-full max-w-[280px] transition-transform duration-700 ease-spring ${
            hover ? "scale-[1.02]" : "scale-100"
          }`}
        >
          {[72, 45, 88].map((height, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-t-md bg-accent-muted/40 border border-accent/10"
                style={{ height: `${height}px` }}
              />
              <div className="h-1.5 w-8 rounded bg-divider" />
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return visuals[name] ?? null;
}
