import { debate } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Debate() {
  return (
    <section id="debate" className="scroll-mt-20 border-t border-divider">
      <div className="page-container-wide py-22 sm:py-30">
        <ScrollReveal>
          <SectionHeader
            label="Debate"
            title="Seven years of competitive argument."
            description="National team representation, tournament leadership, and years of structured reasoning under pressure."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {debate.map((item, i) => (
            <ScrollReveal key={`${item.role}-${item.org}`} delay={i * 80}>
              <article className="card p-6 sm:p-8 h-full hover:shadow-card transition-shadow duration-300">
                <h3 className="text-[18px] font-semibold text-ink mb-1">
                  {item.role}
                </h3>
                <p className="text-[14px] text-ink-muted mb-5">{item.org}</p>

                <ul className="space-y-2.5">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-[14px] text-ink-muted leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-divider flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
