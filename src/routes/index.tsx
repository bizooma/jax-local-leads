import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Search, Shield, MapPin, Globe, Sparkles, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PracticeAreaFilter } from "@/components/PracticeAreaFilter";
import { PRACTICE_AREAS, type PracticeAreaSlug } from "@/data/firms";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JAX Accident Attorneys | Jacksonville Personal Injury Lawyer Directory" },
      { name: "description", content: "Browse a local directory of Jacksonville accident and personal injury law firms serving the JAX area." },
      { property: "og:title", content: "JAX Accident Attorneys | Jacksonville Personal Injury Lawyer Directory" },
      { property: "og:description", content: "A local directory of Jacksonville accident and personal injury law firms." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const [filter, setFilter] = useState<PracticeAreaSlug | "all">("all");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-river text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.07]" aria-hidden>
          {/* Bridge silhouette inspired by the Main Street Bridge */}
          <svg viewBox="0 0 1200 400" className="h-full w-full" preserveAspectRatio="xMidYMax slice">
            <path d="M0,320 L120,320 L160,180 L200,320 L400,320 L440,140 L480,320 L720,320 L760,140 L800,320 L1000,320 L1040,180 L1080,320 L1200,320 L1200,400 L0,400 Z" fill="currentColor" />
            <line x1="160" y1="180" x2="440" y2="140" stroke="currentColor" strokeWidth="3" />
            <line x1="440" y1="140" x2="760" y2="140" stroke="currentColor" strokeWidth="3" />
            <line x1="760" y1="140" x2="1040" y2="180" stroke="currentColor" strokeWidth="3" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              <MapPin className="h-3 w-3" /> Jacksonville · Duval County · FL
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
              Find Personal Injury Attorneys in <span className="text-accent">JAX</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
              A local directory of Jacksonville accident and injury law firms helping residents connect with legal
              help after car accidents, truck accidents, motorcycle accidents, slip and falls, wrongful death
              claims, and other injury matters.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-sunset text-foreground shadow-elegant hover:opacity-95">
                <Link to="/attorneys">
                  Browse Jacksonville Accident Attorneys <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/for-law-firms">For Law Firms: Build Your Own Lead Asset</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER STRIP */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">Browse by practice area</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Filter Jacksonville firms by the type of injury claim you're researching.
              </p>
            </div>
            <Button asChild variant="ghost" className="self-start">
              <Link to="/attorneys">
                Open full directory <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-6">
            <PracticeAreaFilter selected={filter} onChange={setFilter} />
          </div>
          {filter !== "all" && (
            <p className="mt-4 text-sm text-muted-foreground">
              Showing firms tagged with <strong className="text-foreground">{PRACTICE_AREAS.find(p => p.slug === filter)?.name}</strong>.{" "}
              <Link to="/attorneys" search={{ practice: filter } as never} className="text-accent hover:underline">
                View results →
              </Link>
            </p>
          )}
        </div>
      </section>

      {/* WHY LOCAL SEARCH MATTERS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Local Search</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Why Local Search Matters After an Accident
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                When someone is injured, they often search for immediate help using phrases like
                <em className="text-foreground"> "Jacksonville accident attorney,"</em>{" "}
                <em className="text-foreground">"JAX car accident lawyer,"</em> or{" "}
                <em className="text-foreground">"personal injury lawyer near me."</em>
              </p>
              <p>
                This site is designed to show how an exact match or local-search-focused domain can become
                a valuable long-term digital asset — not just a paid ad placement that disappears the moment
                spending stops.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-8">
              <Link to="/for-law-firms">Learn how it works for firms <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Search, label: '"Jacksonville accident attorney"', sub: "Local intent · high value" },
              { icon: MapPin, label: '"JAX car accident lawyer"', sub: "City nickname · brand-aware" },
              { icon: Target, label: '"Truck accident lawyer near me"', sub: "Geo-modified · ready to call" },
              { icon: Globe, label: '"Motorcycle injury lawyer Duval"', sub: "County-level relevance" },
            ].map((t, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <t.icon className="h-5 w-5 text-accent" />
                <p className="mt-3 font-display font-semibold text-foreground">{t.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EMD STILL MATTERS */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Sparkles className="mx-auto h-7 w-7 text-accent" />
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Why Exact Match Domains Still Matter
            </h2>
            <p className="mt-4 text-muted-foreground">
              Exact match domains aren't magic. But when paired with useful content, strong local relevance,
              technical SEO, and conversion-focused design, they can become some of the most valuable marketing
              assets a law firm owns.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Shield, title: "Trust by relevance", body: "A domain that matches the search query reinforces local credibility for both users and search engines." },
              { icon: TrendingUp, title: "Compounding asset", body: "Content, backlinks, and rankings accumulate value over time — unlike paid leads that reset monthly." },
              { icon: Target, title: "Owned conversion path", body: "Every visitor lands in a funnel you control — not on a third-party marketplace alongside competitors." },
            ].map((c, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <c.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT AS A DEMONSTRATION */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-gradient-river p-10 text-primary-foreground shadow-elegant sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Demonstration</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-balance sm:text-4xl">
                Built as a Demonstration of Owned Lead Generation
              </h2>
              <p className="mt-4 max-w-2xl text-primary-foreground/85">
                This site is an example of how a law firm, legal association, or marketing agency can build
                local authority around a specific practice area and market — without renting traffic forever.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button asChild size="lg" className="bg-gradient-sunset text-foreground hover:opacity-95">
                <Link to="/for-law-firms">See the playbook <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/about">About this project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
