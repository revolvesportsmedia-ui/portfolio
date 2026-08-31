import { skills } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-divider">
      <div className="page-container-wide py-22 sm:py-30">
        <ScrollReveal>
          <SectionHeader
            label="Technical"
            title="Tools and languages."
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {skills.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 50}>
              <div className="p-6 sm:p-8">
                <h3 className="section-label mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
