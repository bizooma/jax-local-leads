import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FirmCard } from "@/components/FirmCard";
import { PracticeAreaFilter } from "@/components/PracticeAreaFilter";
import { FIRMS, type PracticeAreaSlug } from "@/data/firms";

type Sort = "alpha" | "practice" | "location";

export const Route = createFileRoute("/attorneys")({
  head: () => ({
    meta: [
      { title: "Jacksonville Accident Attorney Directory | JAX Accident Attorneys" },
      { name: "description", content: "Search Jacksonville personal injury law firms by practice area, location, and name. Local JAX accident attorney directory." },
      { property: "og:title", content: "Jacksonville Accident Attorney Directory" },
      { property: "og:description", content: "Browse Jacksonville personal injury firms by practice area and neighborhood." },
      { property: "og:url", content: "/attorneys" },
    ],
    links: [{ rel: "canonical", href: "/attorneys" }],
  }),
  component: AttorneysPage,
});

function AttorneysPage() {
  const [query, setQuery] = useState("");
  const [practice, setPractice] = useState<PracticeAreaSlug | "all">("all");
  const [sort, setSort] = useState<Sort>("alpha");

  const firms = useMemo(() => {
    let list = FIRMS.filter((f) => {
      const matchesQuery =
        !query ||
        f.firm_name.toLowerCase().includes(query.toLowerCase()) ||
        f.short_description.toLowerCase().includes(query.toLowerCase()) ||
        f.neighborhoods_served.join(" ").toLowerCase().includes(query.toLowerCase());
      const matchesPractice = practice === "all" || f.practice_areas.includes(practice);
      return matchesQuery && matchesPractice;
    });
    if (sort === "alpha") list = [...list].sort((a, b) => a.firm_name.localeCompare(b.firm_name));
    if (sort === "practice") list = [...list].sort((a, b) => a.practice_areas[0].localeCompare(b.practice_areas[0]));
    if (sort === "location") list = [...list].sort((a, b) => a.neighborhoods_served[0].localeCompare(b.neighborhoods_served[0]));
    return list;
  }, [query, practice, sort]);

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Directory</span>
          <h1 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Jacksonville Accident & Injury Law Firm Directory
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A local list of personal injury firms serving the JAX area. Sample data shown — verify firm details
            directly before contacting.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search firms, neighborhoods, keywords…"
                className="pl-9"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Sort by</span>
              <Select value={sort} onValueChange={(v) => setSort(v as Sort)}>
                <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="alpha">Alphabetical</SelectItem>
                  <SelectItem value="practice">Practice Area</SelectItem>
                  <SelectItem value="location">Location / Area of JAX</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-5">
            <PracticeAreaFilter selected={practice} onChange={setPractice} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="mb-6 text-sm text-muted-foreground">
          Showing <strong className="text-foreground">{firms.length}</strong> of {FIRMS.length} sample firms.
        </p>
        {firms.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center">
            <p className="text-muted-foreground">No firms match your filters. Try clearing them.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {firms.map((f) => <FirmCard key={f.id} firm={f} />)}
          </div>
        )}
      </section>
    </>
  );
}
