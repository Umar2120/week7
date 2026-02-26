import CheckIcon from "../icons/CheckIcon";
import { STEPS } from "../libs/constants";

/**
 * Stepper — renders numbered dots + connector lines.
 * Props:
 *   current {number} — index of the active step (0-based)
 */
export default function Stepper({ current }) {
  return (
    <div className="stepper">
      {STEPS.map((_, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            flex: i < STEPS.length - 1 ? 1 : "none",
          }}
        >
          <div
            className={`s-dot ${
              i < current ? "done" : i === current ? "active" : ""
            }`}
          >
            {i < current ? <CheckIcon /> : i + 1}
          </div>
          {i < STEPS.length - 1 && (
            <div className={`s-line ${i < current ? "done" : ""}`} />
          )}
        </div>
      ))}
    </div>
  );
}
