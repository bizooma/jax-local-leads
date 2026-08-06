import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { z } from "zod";

const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const inputSchema = z.object({
  token: z.string().min(1, "Missing Turnstile token"),
});

export interface TurnstileResult {
  success: boolean;
  errorCodes?: string[];
}

/**
 * Canonical Cloudflare Turnstile server-side verification.
 * Must be called before any form submission is accepted.
 */
export const verifyTurnstile = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }): Promise<TurnstileResult> => {
    const secret = process.env["TURNSTILE_SECRET"];
    if (!secret) {
      return { success: false, errorCodes: ["missing-input-secret"] };
    }

    const request = getRequest();
    const remoteip =
      request?.headers.get("cf-connecting-ip") ??
      request?.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      undefined;

    const body: Record<string, string> = {
      secret,
      response: data.token,
    };
    if (remoteip) body.remoteip = remoteip;

    const res = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });

    const outcome = (await res.json()) as { success?: boolean; "error-codes"?: string[] };

    if (outcome.success === true) return { success: true };
    return { success: false, errorCodes: outcome["error-codes"] ?? ["verification-failed"] };
  });
