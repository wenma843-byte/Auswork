const variants = {
  blue: {
    section: "bg-gradient-to-b from-sky-400 via-sky-500 to-sky-600 text-white",
    label: "text-sky-100",
    muted: "text-white/75",
    description: "text-white/90",
  },
  yellow: {
    section: "bg-gradient-to-b from-amber-300 via-[var(--auswork-yellow)] to-amber-400 text-[var(--auswork-navy)]",
    label: "text-amber-900/80",
    muted: "text-[var(--auswork-navy)]/70",
    description: "text-[var(--auswork-navy)]/85",
  },
};

export default function PageHero({
  variant = "blue",
  label,
  title,
  description,
  breadcrumb,
  children,
}) {
  const styles = variants[variant] ?? variants.blue;

  return (
    <section className={`relative overflow-hidden text-center ${styles.section}`}>
      <div className="relative mx-auto max-w-3xl px-4 pb-20 hero-under-nav sm:px-6 sm:pb-28">
        {breadcrumb ? (
          <nav className={`mb-6 text-sm ${styles.muted}`} aria-label="Breadcrumb">
            {breadcrumb}
          </nav>
        ) : null}
        {label ? (
          <p className={`mx-auto w-fit text-sm font-semibold uppercase tracking-widest ${styles.label}`}>
            {label}
          </p>
        ) : null}
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className={`mx-auto mt-5 max-w-2xl text-lg sm:text-xl ${styles.description}`}>
            {description}
          </p>
        ) : null}
        {children ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">{children}</div>
        ) : null}
      </div>
    </section>
  );
}
