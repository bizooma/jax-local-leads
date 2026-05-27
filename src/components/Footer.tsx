import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              A local directory of Jacksonville accident and injury law firms — built as a demonstration of
              owned, local-search-focused lead generation.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/attorneys" className="hover:text-foreground">Directory</Link></li>
              <li><Link to="/for-law-firms" className="hover:text-foreground">For Law Firms</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Practice Areas</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/practice-areas/$slug" params={{ slug: "car-accidents" }} className="hover:text-foreground">Car Accidents</Link></li>
              <li><Link to="/practice-areas/$slug" params={{ slug: "truck-accidents" }} className="hover:text-foreground">Truck Accidents</Link></li>
              <li><Link to="/practice-areas/$slug" params={{ slug: "motorcycle-accidents" }} className="hover:text-foreground">Motorcycle Accidents</Link></li>
              <li><Link to="/practice-areas/$slug" params={{ slug: "wrongful-death" }} className="hover:text-foreground">Wrongful Death</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          <p className="max-w-4xl">
            <strong className="font-semibold text-foreground">Disclaimer:</strong> JAX Accident Attorneys is a
            directory and informational resource only. This website does not provide legal advice, does not
            create an attorney-client relationship, and does not endorse or rank any law firm listed. Users
            should contact law firms directly to determine whether a firm is appropriate for their legal needs.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} JAX Accident Attorneys. All rights reserved.</p>
            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
