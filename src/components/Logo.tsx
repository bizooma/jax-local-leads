import { Link } from "@tanstack/react-router";
import { Scale } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-river text-primary-foreground shadow-elegant transition-transform group-hover:-rotate-3">
        <Scale className="h-5 w-5" strokeWidth={2.25} />
      </span>
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
