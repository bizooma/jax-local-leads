import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | JAX Accident Attorneys" },
      { name: "description", content: "Contact JAX Accident Attorneys to list your firm, request a lead generation website, or update directory information." },
      { property: "og:title", content: "Contact | JAX Accident Attorneys" },
      { property: "og:description", content: "Get in touch about directory listings or lead generation websites." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-gradient-river text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Contact</span>
          <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl text-balance">Get in touch</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">
            List your firm, request a lead generation site, update existing information, or send a general inquiry.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-card"
          >
            {sent ? (
              <div className="py-10 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent/15 text-accent">
                  <Send className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">Message received</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thanks — we'll be in touch shortly at the email you provided.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="firm">Law Firm / Company</Label>
                    <Input id="firm" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="reason">I'm reaching out because…</Label>
                  <Select>
                    <SelectTrigger id="reason"><SelectValue placeholder="Select an option" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="list">I want to list my firm</SelectItem>
                      <SelectItem value="leadgen">I want a lead generation website</SelectItem>
                      <SelectItem value="update">I want to update firm information</SelectItem>
                      <SelectItem value="general">General inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={5} required />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-river text-primary-foreground hover:opacity-95">
                  Send message
                </Button>
              </>
            )}
          </form>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display font-bold text-foreground">Direct contact</h3>
              <div className="mt-4 space-y-3 text-sm">
                <a href="mailto:joe@bizooma.com" className="flex items-center gap-3 text-foreground hover:text-accent">
                  <Mail className="h-4 w-4 text-accent" /> joe@bizooma.com
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent" /> Jacksonville, Florida
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-dashed border-border bg-secondary/40 p-5 text-xs leading-relaxed text-muted-foreground">
              JAX Accident Attorneys is a directory and informational resource only. We do not provide legal
              advice and do not create an attorney-client relationship. Contact firms directly.
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
