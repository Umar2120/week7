/**
 * Step3Review — displays a summary of all collected data for user confirmation.
 * No form or validation — purely presentational.
 * Props:
 *   data     {object}   — the full accumulated formData object
 *   onBack   {function} — navigates back to step 2
 *   onSubmit {function} — finalizes and submits the form
 */
export default function Step3Review({ data, onBack, onSubmit }) {
  return (
    <>
      <div className="card-body view">
        {/* Personal Info section */}
        <div className="review-block">
          <div className="review-head">Personal Info</div>
          <div className="review-row">
            <span className="review-k">First Name</span>
            <span className="review-v">{data.firstName}</span>
          </div>
          <div className="review-row">
            <span className="review-k">Last Name</span>
            <span className="review-v">{data.lastName}</span>
          </div>
          <div className="review-row">
            <span className="review-k">Date of Birth</span>
            <span className="review-v">{data.dob}</span>
          </div>
        </div>

        {/* Account Details section */}
        <div className="review-block">
          <div className="review-head">Account Details</div>
          <div className="review-row">
            <span className="review-k">Email</span>
            <span className="review-v">{data.email}</span>
          </div>
          <div className="review-row">
            <span className="review-k">Password</span>
            <span className="review-v">{"•".repeat(data.password?.length ?? 0)}</span>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <button className="btn btn-ghost" onClick={onBack}>
          ← Back
        </button>
        <button className="btn btn-submit" onClick={onSubmit}>
          Submit ✓
        </button>
      </div>
    </>
  );
}
