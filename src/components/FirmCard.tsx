import { Link } from "@tanstack/react-router";
import { MapPin, Phone, ExternalLink, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Firm } from "@/data/firms";
import { getPracticeAreaName } from "@/data/firms";

export function FirmCard({ firm }: { firm: Firm }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant">
      <div className="flex items-start gap-4 border-b border-border/60 p-5">
        <div
          className={`grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-lg ${
            firm.logo_url
              ? "border border-border bg-white"
              : "bg-gradient-river text-primary-foreground"
          }`}
        >
          {firm.logo_url ? (
            <img
              src={firm.logo_url}
              alt={`${firm.firm_name} logo`}
              className="h-10 w-10 object-contain"
              loading="lazy"
            />
          ) : (
            <Building2 className="h-7 w-7" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-display text-lg font-bold text-foreground">{firm.firm_name}</h3>
          <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {firm.city}, {firm.state} · {firm.neighborhoods_served[0]}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <p className="text-sm leading-relaxed text-muted-foreground">{firm.short_description}</p>

        <div className="flex flex-wrap gap-1.5">
          {firm.practice_areas.slice(0, 4).map((slug) => (
            <Badge key={slug} variant="secondary" className="font-normal">
              {getPracticeAreaName(slug)}
            </Badge>
          ))}
          {firm.practice_areas.length > 4 && (
            <Badge variant="outline" className="font-normal">+{firm.practice_areas.length - 4}</Badge>
          )}
        </div>

        <div className="mt-auto space-y-1.5 border-t border-border/60 pt-4 text-sm">
          <p className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0" /> {firm.address}
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            <Phone className="h-3.5 w-3.5 shrink-0" /> {firm.phone}
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button asChild className="flex-1 bg-gradient-river text-primary-foreground hover:opacity-95">
            <Link to="/attorneys/$slug" params={{ slug: firm.slug }}>
              View Firm Profile <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <a href={firm.website_url} target="_blank" rel="noopener noreferrer">
              Visit Website <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
