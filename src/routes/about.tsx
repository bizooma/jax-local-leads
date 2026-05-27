import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About This Project | JAX Accident Attorneys" },
      { name: "description", content: "JAX Accident Attorneys is a local directory concept demonstrating how city- and practice-area-specific domains become digital assets for law firms." },
      { property: "og:title", content: "About This Project | JAX Accident Attorneys" },
      { property: "og:description", content: "A demonstration of owned, local lead generation." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-gradient-river text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">About</span>
          <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl text-balance">About This Project</h1>
          <p className="mt-5 text-lg text-primary-foreground/85">
            JAX Accident Attorneys was created as a local directory concept to demonstrate how city-specific,
            practice-area-specific domains can become powerful digital assets for law firms.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
          <p>
            Instead of relying entirely on third-party lead generation companies, firms can invest in their own
            branded search properties, content hubs, and conversion funnels that build long-term value.
          </p>
          <p>
            This directory uses sample firm data for demonstration purposes. Real firm information must be
            verified before being published in a live directory.
          </p>
        </div>

        <div className="mt-10 rounded-2xl bg-gradient-river p-10 text-center text-primary-foreground shadow-elegant">
          <p className="font-display text-2xl font-bold sm:text-3xl text-balance">
            Lead generation should be an asset, not just an expense.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild className="bg-gradient-river text-primary-foreground hover:opacity-95">
            <Link to="/for-law-firms">See the playbook for firms</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/attorneys">Browse the directory</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
