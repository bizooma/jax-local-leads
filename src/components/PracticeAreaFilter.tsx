import { PRACTICE_AREAS, type PracticeAreaSlug } from "@/data/firms";
import { cn } from "@/lib/utils";

interface Props {
  selected: PracticeAreaSlug | "all";
  onChange: (slug: PracticeAreaSlug | "all") => void;
}

export function PracticeAreaFilter({ selected, onChange }: Props) {
  const opts: Array<{ slug: PracticeAreaSlug | "all"; name: string }> = [
    { slug: "all", name: "All Practice Areas" },
    ...PRACTICE_AREAS.map((p) => ({ slug: p.slug, name: p.name })),
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {opts.map((o) => (
        <button
          key={o.slug}
          onClick={() => onChange(o.slug)}
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
            selected === o.slug
              ? "border-transparent bg-gradient-river text-primary-foreground shadow-elegant"
              : "border-border bg-card text-muted-foreground hover:border-accent hover:text-foreground"
          )}
        >
          {o.name}
        </button>
      ))}
    </div>
  );
}
