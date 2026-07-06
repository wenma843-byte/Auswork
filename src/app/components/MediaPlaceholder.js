export function MediaPlaceholder({
  label = "Photo coming soon",
  aspect = "aspect-[4/3]",
  className = "",
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-100 ${aspect} ${className}`}
      aria-label={label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <svg
          className="h-10 w-10 text-zinc-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
          />
        </svg>
        <span className="text-sm font-medium text-zinc-400">{label}</span>
      </div>
    </div>
  );
}

export function VideoPlaceholder({ label = "Video coming soon", className = "" }) {
  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-900 ${className}`}
      aria-label={label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-zinc-600 bg-zinc-800/80">
          <svg
            className="ml-1 h-7 w-7 text-zinc-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span className="text-sm font-medium text-zinc-500">{label}</span>
      </div>
    </div>
  );
}
