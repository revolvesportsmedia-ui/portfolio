import { education } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Education() {
  return (
    <section className="border-t border-divider">
      <div className="page-container-wide py-22 sm:py-30">
        <ScrollReveal>
          <SectionHeader
            label="Education"
            title="Academic foundation."
          />
        </ScrollReveal>

        <div className="space-y-px bg-divider rounded-xl overflow-hidden border border-divider">
          {education.map((item, i) => (
            <ScrollReveal key={item.school} delay={i * 60}>
              <article className="bg-surface-elevated p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-ink leading-snug max-w-xl">
                    {item.school}
                  </h3>
                  <span className="text-[13px] text-ink-muted whitespace-nowrap">
                    {item.period}
                  </span>
                </div>

                <p className="text-[15px] text-ink font-medium mb-1">
                  {item.degree}
                </p>

                {"grade" in item && item.grade && (
                  <p className="text-[14px] text-ink-muted mb-4">{item.grade}</p>
                )}

                {item.highlights.length > 0 && (
                  <ul className="space-y-2.5 mt-4 pt-4 border-t border-divider">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-[14px] text-ink-muted leading-relaxed"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
