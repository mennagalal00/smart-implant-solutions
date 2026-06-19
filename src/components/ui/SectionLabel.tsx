interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-brand-amber/15 text-brand-amber border border-brand-amber/30 ${className}`}
    >
      {children}
    </span>
  );
}
