import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { FirmCard } from "@/components/FirmCard";
import { Button } from "@/components/ui/button";
import { FIRMS, getPracticeAreaBySlug, PRACTICE_AREAS, type PracticeArea, type Firm } from "@/data/firms";

export const Route = createFileRoute("/practice-areas/$slug")({
  loader: ({ params }) => {
    const area = getPracticeAreaBySlug(params.slug);
    if (!area) throw notFound();
    const firms = FIRMS.filter((f) => f.practice_areas.includes(area.slug));
    return { area, firms };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Jacksonville ${loaderData.area.name} Lawyers | JAX Accident Attorneys` },
          { name: "description", content: `${loaderData.area.description} Browse Jacksonville firms handling ${loaderData.area.name.toLowerCase()} claims.` },
          { property: "og:title", content: `Jacksonville ${loaderData.area.name} Lawyers` },
          { property: "og:description", content: loaderData.area.description },
          { property: "og:url", content: `/practice-areas/${loaderData.area.slug}` },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/practice-areas/${loaderData.area.slug}` }] : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Practice area not found</h1>
      <Button asChild className="mt-6"><Link to="/attorneys">Browse directory</Link></Button>
    </div>
  ),
  component: PracticeAreaPage,
});

function PracticeAreaPage() {
  const { area, firms } = Route.useLoaderData() as { area: PracticeArea; firms: Firm[] };

  return (
    <>
      <section className="border-b border-border bg-gradient-river text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <Link to="/attorneys" className="inline-flex items-center gap-1 text-sm text-primary-foreground/80 hover:text-primary-foreground">
            <ArrowLeft className="h-4 w-4" /> All attorneys
          </Link>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl text-balance">
            Jacksonville {area.name} Lawyers
          </h1>
          <p className="mt-3 max-w-3xl text-primary-foreground/85">{area.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-foreground">
          {firms.length} firm{firms.length === 1 ? "" : "s"} listed
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">Sample directory entries — verify before contacting.</p>
        {firms.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {firms.map((f) => <FirmCard key={f.id} firm={f} />)}
          </div>
        ) : (
          <div className="mt-8 rounded-xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground">
            No firms currently listed under this practice area.
          </div>
        )}

        <div className="mt-16 border-t border-border pt-10">
          <h3 className="font-display text-lg font-bold text-foreground">Explore other practice areas</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {PRACTICE_AREAS.filter((p) => p.slug !== area.slug).map((p) => (
              <Link
                key={p.slug}
                to="/practice-areas/$slug"
                params={{ slug: p.slug }}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground hover:border-accent hover:text-foreground"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
