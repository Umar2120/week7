import { getStrength, strengthMeta } from "../libs/passwordUtils";

/**
 * StrengthMeter — 4-segment password strength bar + label.
 * Returns null if value is empty.
 * Props:
 *   value {string} — current password field value
 */
export default function StrengthMeter({ value }) {
  if (!value) return null;

  const score = getStrength(value);
  const m = strengthMeta[score - 1] || strengthMeta[0];

  return (
    <>
      <div className="strength-row">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="s-seg"
            style={{ background: i <= score ? m.color : undefined }}
          />
        ))}
      </div>
      <div className="s-lbl" style={{ color: m.color }}>
        {m.label} password
      </div>
    </>
  );
}
