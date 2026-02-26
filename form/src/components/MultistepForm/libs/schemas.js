import { z } from "zod";

/* ─────────────────────────────────────────
   ZOD SCHEMAS  (single source of truth)
───────────────────────────────────────── */

export const step1Schema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName:  z.string().min(1, "Last name is required."),
  dob:       z.string().min(1, "Date of birth is required."),
});

export const step2Schema = z
  .object({
    email:           z.string().min(1, "Email is required.").email("Must be a valid email address."),
    password:        z.string().min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string().min(1, "Please confirm your password."),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export const schemas = [step1Schema, step2Schema];
