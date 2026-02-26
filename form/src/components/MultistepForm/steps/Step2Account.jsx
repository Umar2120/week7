import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema } from "../libs/schemas";
import CheckIcon from "../icons/CheckIcon";
import EyeOpen from "../icons/EyeOpen";
import EyeOff from "../icons/EyeOff";
import StrengthMeter from "../components/StrengthMeter";

/**
 * Step2Account — collects email, password, and confirm password.
 * Props:
 *   defaults {object}   — previously committed step-2 values (for Back navigation)
 *   onNext   {function} — called with valid data to advance to step 3
 *   onBack   {function} — navigates back to step 1
 */
export default function Step2Account({ defaults, onNext, onBack }) {
  const [showPw,  setShowPw]  = useState(false);
  const [showCpw, setShowCpw] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields, isValid },
  } = useForm({
    resolver: zodResolver(step2Schema),
    defaultValues: defaults,
    mode: "onChange",
  });

  const pw = watch("password", "");

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate>
      <div className="card-body view">
        <div className="schema-tag">
          <span>zod schema ·</span> step2Schema
        </div>

        {/* Email */}
        <div className="field">
          <label>
            Email Address
            {dirtyFields.email && !errors.email && (
              <span className="label-badge">
                <CheckIcon />
              </span>
            )}
          </label>
          <input
            type="text"
            {...register("email")}
            placeholder="ada@lovelace.dev"
            className={
              errors.email
                ? "err"
                : dirtyFields.email && !errors.email
                ? "ok"
                : ""
            }
          />
          {errors.email && (
            <div className="field-err">{errors.email.message}</div>
          )}
        </div>

        {/* Password */}
        <div className="field">
          <label>
            Password
            {dirtyFields.password && !errors.password && (
              <span className="label-badge">
                <CheckIcon />
              </span>
            )}
          </label>
          <div className="input-wrap">
            <input
              type={showPw ? "text" : "password"}
              {...register("password")}
              placeholder="Min. 8 characters"
              className={`with-eye ${
                errors.password
                  ? "err"
                  : dirtyFields.password && !errors.password
                  ? "ok"
                  : ""
              }`}
            />
            <button
              type="button"
              className="eye-btn"
              tabIndex={-1}
              onClick={() => setShowPw((v) => !v)}
            >
              {showPw ? <EyeOff /> : <EyeOpen />}
            </button>
          </div>
          {errors.password && (
            <div className="field-err">{errors.password.message}</div>
          )}
          <StrengthMeter value={pw} />
        </div>

        {/* Confirm Password */}
        <div className="field">
          <label>
            Confirm Password
            {dirtyFields.confirmPassword && !errors.confirmPassword && (
              <span className="label-badge">
                <CheckIcon />
              </span>
            )}
          </label>
          <div className="input-wrap">
            <input
              type={showCpw ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="Repeat password"
              className={`with-eye ${
                errors.confirmPassword
                  ? "err"
                  : dirtyFields.confirmPassword && !errors.confirmPassword
                  ? "ok"
                  : ""
              }`}
            />
            <button
              type="button"
              className="eye-btn"
              tabIndex={-1}
              onClick={() => setShowCpw((v) => !v)}
            >
              {showCpw ? <EyeOff /> : <EyeOpen />}
            </button>
          </div>
          {errors.confirmPassword && (
            <div className="field-err">{errors.confirmPassword.message}</div>
          )}
        </div>
      </div>

      <div className="card-footer">
        <button type="button" className="btn btn-ghost" onClick={onBack}>
          ← Back
        </button>
        <button type="submit" className="btn btn-primary" disabled={!isValid}>
          Next →
        </button>
      </div>
    </form>
  );
}
