import { experience } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Experience() {
  const featured = experience.find((item) => item.featured);
  const rest = experience.filter((item) => !item.featured);

  return (
    <section id="experience" className="scroll-mt-20">
      <div className="page-container-wide py-22 sm:py-30">
        <ScrollReveal>
          <SectionHeader
            label="Experience"
            title="Built at scale. Led with intent."
            description="From growing a media business to leading student initiatives: work defined by ownership and measurable outcomes."
          />
        </ScrollReveal>

        {featured && (
          <ScrollReveal delay={60}>
            <div className="rounded-xl bg-surface-dark text-white overflow-hidden mb-6 border border-ink/10">
              <div className="grid lg:grid-cols-[1fr_1.2fr]">
                <div className="p-8 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50 mb-4">
                    Featured
                  </p>
                  <h3 className="text-[28px] sm:text-[36px] font-semibold tracking-tight mb-2">
                    {featured.role}
                  </h3>
                  <p className="text-[15px] text-accent-muted mb-1">{featured.org}</p>
                  <p className="text-[14px] text-white/50">{featured.period}</p>
                </div>

                <div className="p-8 sm:p-10 lg:p-12">
                  <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-white/10">
                    <div>
                      <p className="text-[32px] sm:text-[40px] font-semibold tracking-tight tabular-nums">
                        200K+
                      </p>
                      <p className="text-[13px] text-white/50 mt-1">Subscribers</p>
                    </div>
                    <div>
                      <p className="text-[32px] sm:text-[40px] font-semibold tracking-tight tabular-nums">
                        65.1M+
                      </p>
                      <p className="text-[13px] text-white/50 mt-1">Total views</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {featured.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-[14px] sm:text-[15px] text-white/70 leading-relaxed"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {rest.map((item, i) => (
            <ScrollReveal key={`${item.role}-${item.org}`} delay={120 + i * 60}>
              <article className="card p-6 sm:p-8 h-full hover:shadow-card transition-shadow duration-300">
                <h3 className="text-[18px] font-semibold text-ink mb-1">
                  {item.role}
                </h3>
                <p className="text-[14px] text-accent font-medium mb-1">
                  {item.org}
                </p>
                <p className="text-[13px] text-ink-muted mb-5">{item.period}</p>

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
