import { community } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Community() {
  return (
    <section id="community" className="scroll-mt-20 border-t border-divider">
      <div className="page-container-wide py-22 sm:py-30">
        <ScrollReveal>
          <SectionHeader
            label="Leadership & Community"
            title="Beyond building software - contributing to community."
            description="From organizing school events to supporting meditation courses, I'm committed to impactful involvement."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {community.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <article className="card p-6 sm:p-8 h-full hover:shadow-card transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    {item.title.includes("Vipassana") && <MeditationIcon />}
                    {item.title.includes("Fundraising") && <DollarSignIcon />}
                    {item.title.includes("Maths") && <CalculatorIcon />}
                    {item.title.includes("Debate") && <ScaleIcon />}
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-ink mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-ink-muted">
                      {item.org} {item.period && ` - ${item.period}`}
                    </p>
                  </div>
                </div>

                <p className="body-text mb-4">{item.description}</p>

                {"amountRaised" in item && item.amountRaised && (
                  <div className="mt-6 pt-6 border-t border-divider">
                    <p className="text-[28px] font-semibold text-green-500 tracking-tight">
                      {item.amountRaised}
                    </p>
                    <p className="text-[13px] text-ink-muted mt-1">Raised for causes</p>
                  </div>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// SVG Icons
function MeditationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent"
    >
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M12 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
      <path d="M2 16s1.5 2 4 2 4-2 4-2" />
      <path d="M14 16s1.5 2 4 2 4-2 4-2" />
    </svg>
  );
}

function DollarSignIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent"
    >
      <path d="M12 1v22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function CalculatorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="10" y2="18" />
      <line x1="8" x2="8" y1="10" y2="18" />
      <line x1="12" x2="12" y1="10" y2="18" />
      <line x1="8" x2="16" y1="14" y2="14" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent"
    >
      <path d="m16 16 3-3V7L5 21l3-3 5-5 3 3z" />
      <path d="M14 7l-7 7" />
      <path d="m5 5 14 14" />
    </svg>
  );
}
