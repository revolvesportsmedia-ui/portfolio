import { profile } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Footer() {
  return (
    <footer className="border-t border-divider">
      <div className="page-container-wide py-16 sm:py-20">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <div>
              <p className="text-[24px] sm:text-[28px] font-semibold tracking-tight text-ink mb-2">
                {profile.name}
              </p>
              <p className="text-[14px] text-ink-muted">
                {profile.location} · University of Illinois
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <MagneticButton
                href={`mailto:${profile.email}`}
                className="h-10 px-4 rounded-md bg-ink text-white text-[13px] font-medium"
              >
                Email
              </MagneticButton>
              <MagneticButton
                href={profile.youtube}
                external
                className="h-10 px-4 rounded-md border border-divider text-[13px] font-medium text-ink hover:shadow-card transition-shadow duration-200"
              >
                YouTube
              </MagneticButton>
            </div>
          </div>

          <p className="text-[12px] text-ink-muted/60 mt-12">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
