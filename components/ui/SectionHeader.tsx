type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 sm:mb-12 ${className}`}>
      <p className="section-label mb-3">{label}</p>
      <h2 className="section-heading text-balance">{title}</h2>
      {description && (
        <p className="body-text mt-3 max-w-2xl">{description}</p>
      )}
    </div>
  );
}
