import { useState } from "react";
import "./MultistepForm.css";

import { STEPS, EMPTY } from "./libs/constants";

import Stepper       from "./components/Stepper";
import ProgressBar   from "./components/ProgressBar";
import SuccessScreen from "./components/SuccessScreen";

import Step1Personal from "./steps/Step1Personal";
import Step2Account  from "./steps/Step2Account";
import Step3Review   from "./steps/Step3Review";

/**
 * MultiStepForm — root orchestrator.
 *
 * Responsibilities:
 *  - Owns step, done, and formData state
 *  - Merges partial data from each step into a single formData object
 *  - Passes accumulated defaults back to steps (so Back navigation restores values)
 *  - Renders the shared card chrome (progress bar, header, stepper)
 *  - Mounts the correct step component based on current step index
 */
export default function MultiStepForm() {
  const [step,     setStep]     = useState(0);
  const [done,     setDone]     = useState(false);
  const [formData, setFormData] = useState(EMPTY);

  /** Merge a partial step result into the accumulated formData */
  const merge = (partial) => setFormData((prev) => ({ ...prev, ...partial }));

  const handleStep1 = (data) => { merge(data); setStep(1); };
  const handleStep2 = (data) => { merge(data); setStep(2); };

  const handleSubmit = () => {
    const final = { ...formData };
    delete final.confirmPassword; // don't ship redundant field
    console.log("✅ Form submitted:", final);
    setDone(true);
  };

  const reset = () => {
    setDone(false);
    setStep(0);
    setFormData(EMPTY);
  };

  const pct  = ((step + 1) / 3) * 100;
  const meta = STEPS[step];

  return (
    <>
      <div className="shell">
        <div className="glow-a" />
        <div className="glow-b" />

        <div className="card">
          {/* Top progress bar */}
          <ProgressBar percent={done ? 100 : pct} />

          {done ? (
            <SuccessScreen formData={formData} onReset={reset} />
          ) : (
            <>
              {/* Shared card header */}
              <div className="card-header">
                <Stepper current={step} />
                <div className="header-top">
                  <div className="step-eyebrow">{meta.eyebrow}</div>
                  <div className="step-counter">
                    step <em>{step + 1}</em> / 3
                  </div>
                </div>
                <div className="card-title">{meta.title}</div>
              </div>

              {/* Step views — each mounts its own useForm instance */}
              {step === 0 && (
                <Step1Personal
                  key="s1"
                  defaults={{
                    firstName: formData.firstName,
                    lastName:  formData.lastName,
                    dob:       formData.dob,
                  }}
                  onNext={handleStep1}
                />
              )}
              {step === 1 && (
                <Step2Account
                  key="s2"
                  defaults={{
                    email:           formData.email,
                    password:        formData.password,
                    confirmPassword: formData.confirmPassword,
                  }}
                  onNext={handleStep2}
                  onBack={() => setStep(0)}
                />
              )}
              {step === 2 && (
                <Step3Review
                  key="s3"
                  data={formData}
                  onBack={() => setStep(1)}
                  onSubmit={handleSubmit}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
