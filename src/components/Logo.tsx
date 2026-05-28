import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2 ${className}`}>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-extrabold tracking-tight text-foreground">
          JAX <span className="text-accent">Accident</span> Attorneys
        </span>
        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Jacksonville · Florida
        </span>
      </span>
    </Link>
  );
}
