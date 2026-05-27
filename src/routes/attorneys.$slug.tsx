import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Phone, Globe, Building2, Users, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FIRMS, getFirmBySlug, getPracticeAreaName } from "@/data/firms";

export const Route = createFileRoute("/attorneys/$slug")({
  loader: ({ params }) => {
    const firm = getFirmBySlug(params.slug);
    if (!firm) throw notFound();
    return { firm };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.firm.firm_name} | JAX Accident Attorneys` },
          { name: "description", content: loaderData.firm.short_description },
          { property: "og:title", content: `${loaderData.firm.firm_name} | Jacksonville Personal Injury Firm` },
          { property: "og:description", content: loaderData.firm.short_description },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/attorneys/${loaderData.firm.slug}` },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/attorneys/${loaderData.firm.slug}` }] : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Firm not found</h1>
      <p className="mt-3 text-muted-foreground">We couldn't find that firm in the directory.</p>
      <Button asChild className="mt-6"><Link to="/attorneys">Back to directory</Link></Button>
    </div>
  ),
  component: FirmProfile,
});

function FirmProfile() {
  const { firm } = Route.useLoaderData() as { firm: import("@/data/firms").Firm };

  return (
    <>
      <section className="bg-gradient-river text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Link to="/attorneys" className="inline-flex items-center gap-1 text-sm text-primary-foreground/80 hover:text-primary-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to directory
          </Link>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="grid h-20 w-20 shrink-0 place-items-center rounded-xl bg-primary-foreground/10 ring-1 ring-primary-foreground/20 backdrop-blur">
              <Building2 className="h-10 w-10 text-accent" />
            </div>
            <div className="flex-1">
              <h1 className="font-display text-3xl font-bold sm:text-4xl text-balance">{firm.firm_name}</h1>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4" /> {firm.address}, {firm.city}, {firm.state} {firm.zip}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {firm.practice_areas.map((slug) => (
                  <Badge key={slug} className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/15">
                    {getPracticeAreaName(slug)}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            {/* Office photo placeholder */}
            <div className="aspect-[16/8] overflow-hidden rounded-xl border border-border bg-gradient-to-br from-secondary to-card shadow-card">
              <div className="grid h-full place-items-center text-muted-foreground">
                <div className="text-center">
                  <Building2 className="mx-auto h-10 w-10 opacity-40" />
                  <p className="mt-2 text-xs uppercase tracking-wider">Office photo placeholder</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">Overview</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{firm.full_description}</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">Practice Areas</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {firm.practice_areas.map((slug) => (
                  <Link
                    key={slug}
                    to="/practice-areas/$slug"
                    params={{ slug }}
                    className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent"
                  >
                    <Scale className="h-5 w-5 text-accent" />
                    <span className="font-medium text-foreground group-hover:text-accent">{getPracticeAreaName(slug)}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">Attorneys</h2>
              <div className="mt-4 space-y-3">
                {firm.attorneys.map((a, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary">
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{a.name}</p>
                      <p className="text-sm text-muted-foreground">{a.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">Location</h2>
              <div className="mt-4 aspect-[16/7] overflow-hidden rounded-xl border border-border bg-secondary">
                <div className="grid h-full place-items-center text-muted-foreground">
                  <div className="text-center">
                    <MapPin className="mx-auto h-8 w-8 opacity-40" />
                    <p className="mt-2 text-xs uppercase tracking-wider">Map embed placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display font-bold text-foreground">Contact this firm</h3>
              <div className="mt-4 space-y-3 text-sm">
                <a href={`tel:${firm.phone.replace(/[^\\d+]/g, "")}`} className="flex items-center gap-3 text-foreground hover:text-accent">
                  <Phone className="h-4 w-4 text-accent" /> {firm.phone}
                </a>
                <a href={firm.website_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent">
                  <Globe className="h-4 w-4 text-accent" /> {firm.website_url.replace(/^https?:\/\//, "")}
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                  <span>{firm.address}<br />{firm.city}, {firm.state} {firm.zip}</span>
                </div>
              </div>
              <Button asChild className="mt-5 w-full bg-gradient-river text-primary-foreground hover:opacity-95">
                <a href={firm.website_url} target="_blank" rel="noopener noreferrer">Visit Website</a>
              </Button>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display font-bold text-foreground">Areas Served</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {firm.neighborhoods_served.map((n) => (
                  <Badge key={n} variant="secondary" className="font-normal">{n}</Badge>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-dashed border-border bg-secondary/40 p-5 text-xs leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Disclaimer:</strong> JAX Accident Attorneys is a directory only.
              Contact the firm directly to determine fit. This site does not provide legal advice and does not
              create an attorney-client relationship.
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export const FIRM_SLUGS = FIRMS.map((f) => f.slug);
