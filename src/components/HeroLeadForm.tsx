import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Turnstile } from "@/components/Turnstile";
import { verifyTurnstile } from "@/lib/api/turnstile.functions";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(30),
  email: z.string().trim().email("Please enter a valid email").max(255),
  accidentType: z.string().min(1, "Please select an accident type"),
  details: z.string().trim().min(1, "Please share a brief description").max(1000),
});

const ACCIDENT_TYPES = [
  "Car Accident",
  "Truck Accident",
  "Motorcycle Accident",
  "Slip and Fall",
  "Wrongful Death",
  "Other Injury",
];

export function HeroLeadForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [accidentType, setAccidentType] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [captchaToken, setCaptchaToken] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      accidentType,
      details: String(formData.get("details") ?? ""),
    };

    const result = leadSchema.safeParse(payload);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    if (!captchaToken) {
      setErrors({ captcha: "Please complete the verification challenge." });
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const verification = await verifyTurnstile({ data: { token: captchaToken } });
      if (!verification.success) {
        setSubmitting(false);
        setCaptchaToken("");
        setErrors({ captcha: "Verification failed. Please try again." });
        toast.error("We couldn't verify your submission. Please try again.");
        return;
      }
    } catch {
      setSubmitting(false);
      setErrors({ captcha: "Verification failed. Please try again." });
      return;
    }

    setSubmitting(false);
    setSubmitted(true);
    toast.success("Your request has been received. An attorney will reach out shortly.");
    formEl.reset();
    setAccidentType("");
    setCaptchaToken("");
  };

  if (submitted) {
    return (
    <div className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-8 text-card-foreground shadow-2xl backdrop-blur-xl sm:p-7">
        <CheckCircle2 className="h-10 w-10 text-accent" />
        <h3 className="mt-4 font-display text-2xl font-bold">Thanks — we got it.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          A local Jacksonville attorney from our directory will reach out to discuss your case. No
          obligation, free consultation.
        </p>
        <Button variant="outline" className="mt-6 border-foreground/30 bg-primary-foreground/10 text-foreground hover:bg-foreground/10" onClick={() => setSubmitted(false)}>
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-card-foreground shadow-2xl backdrop-blur-xl sm:p-7">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
        <Shield className="h-3.5 w-3.5" /> Free case review
      </div>
      <h2 className="mt-2 font-display text-2xl font-bold text-foreground">
        Tell us about your accident
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Confidential — connect with a Jacksonville injury attorney.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
        <div className="space-y-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" autoComplete="name" maxLength={100} required />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30} required />
            {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" autoComplete="email" maxLength={255} required />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="accidentType">Type of accident</Label>
          <Select value={accidentType} onValueChange={setAccidentType}>
            <SelectTrigger id="accidentType">
              <SelectValue placeholder="Select an accident type" />
            </SelectTrigger>
            <SelectContent>
              {ACCIDENT_TYPES.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.accidentType && <p className="text-xs text-destructive">{errors.accidentType}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="details">What happened?</Label>
          <Textarea
            id="details"
            name="details"
            rows={4}
            maxLength={1000}
            placeholder="Briefly describe the accident, injuries, and when it occurred."
            required
          />
          {errors.details && <p className="text-xs text-destructive">{errors.details}</p>}
        </div>

        <div className="space-y-1.5">
          <Turnstile onVerify={setCaptchaToken} onExpire={() => setCaptchaToken("")} />
          {errors.captcha && <p className="text-xs text-destructive">{errors.captcha}</p>}
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="w-full bg-gradient-sunset text-foreground shadow-elegant hover:opacity-95"
        >
          {submitting ? "Sending..." : "Get my free case review"}
        </Button>
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          By submitting, you agree to be contacted about your inquiry. Submitting this form does not
          create an attorney-client relationship.
        </p>
      </form>
    </div>
  );
}
