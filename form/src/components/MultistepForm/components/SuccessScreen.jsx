/**
 * SuccessScreen — shown after the form is submitted.
 * Props:
 *   formData {object} — the final accumulated form data
 *   onReset  {function} — callback to reset the form to step 0
 */
export default function SuccessScreen({ formData, onReset }) {
  const preview = JSON.stringify(
    { ...formData, confirmPassword: undefined, password: "••••••••" },
    null,
    2
  );

  return (
    <div className="success view">
  <div className="success-ring">✓</div>
  <div className="success-title">Registered!</div>
  <p className="success-sub">
    Welcome, <strong>{formData.firstName} {formData.lastName}</strong>!
    <br />
    Your account has been successfully created.
  </p>
  <p><strong>Date of Birth:</strong> {formData.dob}</p>
  <button className="btn btn-ghost" style={{ marginTop: 8 }} onClick={onReset}>
    Start Over
  </button>
</div>
  );
}
