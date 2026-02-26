/* ─────────────────────────────────────────
   PASSWORD STRENGTH UTILITIES
───────────────────────────────────────── */

export const strengthMeta = [
  { label: "Weak",   color: "#f06070" },
  { label: "Fair",   color: "#f0b060" },
  { label: "Good",   color: "#60d4f0" },
  { label: "Strong", color: "#60f0a8" },
];

/**
 * Returns a score from 0–4 based on:
 * - Length >= 8
 * - Contains uppercase
 * - Contains number
 * - Contains special character
 */
export const getStrength = (v = "") => {
  let s = 0;
  if (v.length >= 8)           s++;
  if (/[A-Z]/.test(v))         s++;
  if (/[0-9]/.test(v))         s++;
  if (/[^A-Za-z0-9]/.test(v)) s++;
  return s;
};
