import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, X, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import lawFirmOffice from "@/assets/law-firm-office.jpg";

export const Route = createFileRoute("/for-law-firms")({
  head: () => ({
    meta: [
      { title: "Build Your Own Law Firm Lead Generation Website | Bizooma" },
      { name: "description", content: "Learn how law firms can use exact match domains, local content hubs, and owned lead generation websites to build sustainable digital assets." },
      { property: "og:title", content: "Build Your Own Law Firm Lead Generation Website | Bizooma" },
      { property: "og:description", content: "Stop renting leads. Build digital assets you own." },
      { property: "og:url", content: "/for-law-firms" },
    ],
    links: [{ rel: "canonical", href: "/for-law-firms" }],
  }),
  component: ForLawFirms,
});

function ForLawFirms() {
  return (
    <>
      <section className="bg-gradient-river text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">For Law Firms</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl text-balance">
            Stop Renting Leads. Start Building Digital Assets.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85">
            Exact match domains, local content hubs, and practice-area-specific websites can help law firms create
            sustainable lead generation channels they own.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-sunset text-foreground shadow-elegant hover:opacity-95">
              <a href="mailto:joe@bizooma.com">Talk to Bizooma <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/attorneys">View Example Directory</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">The Problem</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
              The Problem With Traditional Lead Generation
            </h2>
            <p className="mt-4 text-muted-foreground">
              Paid lead marketplaces and aggregators can deliver volume, but firms often hit the same ceiling.
            </p>
          </div>
          <ul className="space-y-3">
            {[
              "Many firms pay for the same leads as their competitors",
              "Lead quality varies and is hard to control",
              "Costs increase year over year",
              "The firm does not own the platform or the audience",
              "Once spending stops, the lead flow stops",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EMD Opportunity */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">The Opportunity</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
              The EMD Opportunity
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { t: "Aligned with intent", b: "Exact match domains align with how people actually search for legal help in moments of need." },
              { t: "Locally focused", b: "Local domains support geographically focused campaigns and city-specific content." },
              { t: "Practice-area precision", b: "Practice-area-specific websites serve as conversion-focused landing assets, not generic firm pages." },
              { t: "Long-term equity", b: "Owned sites compound in value over years — they become digital equity for the firm." },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="font-display text-lg font-bold text-foreground">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why build */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">The Playbook</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Why Build a Lead Generation Site?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Lead generation should be an asset, not just an expense. Owning the funnel changes everything.
            </p>
          </div>
          <ul className="space-y-3">
            {[
              "Own the domain",
              "Own the content",
              "Own the conversion path",
              "Build topical authority over time",
              "Support SEO, AEO, Voice SEO, PPC, GBP campaigns, and local search visibility",
              "Create a long-term asset instead of only paying for rented traffic",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">Example Use Cases</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Jacksonville car accident lawyer campaign",
              "JAX motorcycle accident attorney landing page",
              "Truck accident lawyer content hub",
              "Wrongful death attorney resource center",
              "Neighborhood-specific accident pages",
              "Sports / event / momentum campaigns that drive traffic into the site",
            ].map((u) => (
              <div key={u} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <p className="font-display font-semibold text-foreground">{u}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-gradient-river p-10 text-primary-foreground shadow-elegant sm:p-14">
          <h2 className="font-display text-3xl font-bold sm:text-4xl text-balance">
            Want a lead generation site like this for your law firm?
          </h2>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">
            Bizooma helps law firms build owned digital assets — exact match domains, local content hubs,
            and conversion-focused websites that compound in value.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-sunset text-foreground hover:opacity-95">
              <a href="mailto:joe@bizooma.com">Talk to Bizooma</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/attorneys">View Example Directory</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-primary-foreground/85 sm:grid-cols-3">
            <div><span className="font-semibold text-primary-foreground">Bizooma</span></div>
            <a href="https://bizooma.com" className="flex items-center gap-2 hover:text-primary-foreground" target="_blank" rel="noopener noreferrer">
              <Globe className="h-4 w-4" /> Bizooma.com
            </a>
            <a href="mailto:joe@bizooma.com" className="flex items-center gap-2 hover:text-primary-foreground">
              <Mail className="h-4 w-4" /> joe@bizooma.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
