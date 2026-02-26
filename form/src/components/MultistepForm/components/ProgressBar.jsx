/**
 * ProgressBar — animated top bar showing overall form completion.
 * Props:
 *   percent {number} — width percentage (0–100)
 */
export default function ProgressBar({ percent }) {
  return (
    <div className="pbar-track">
      <div className="pbar-fill" style={{ width: `${percent}%` }} />
    </div>
  );
}
