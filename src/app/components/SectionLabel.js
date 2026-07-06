export default function SectionLabel({ children, className = "" }) {
  return (
    <p className={`text-sm font-semibold uppercase tracking-widest text-sky-600 ${className}`}>
      {children}
    </p>
  );
}
