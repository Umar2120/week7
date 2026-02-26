import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema } from "../libs/schemas";
import CheckIcon from "../icons/CheckIcon";

/**
 * Step1Personal — collects first name, last name, and date of birth.
 * Props:
 *   defaults {object}   — previously committed step-1 values (for Back navigation)
 *   onNext   {function} — called with valid data to advance to step 2
 */
export default function Step1Personal({ defaults, onNext }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },
  } = useForm({
    resolver: zodResolver(step1Schema),
    defaultValues: defaults,
    mode: "onChange",
  });

  const vals = watch();

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate>
      <div className="card-body view">
        <div className="schema-tag">
          <span>Fill the form </span> Details
        </div>

        <div className="grid-2">
          {/* First Name */}
          <div className="field">
            <label>
              First Name
              {dirtyFields.firstName && !errors.firstName && (
                <span className="label-badge">
                  <CheckIcon />
                </span>
              )}
            </label>
            <input
  {...register("firstName")}
  placeholder="Ada"
  className={`first-page-input ${
    errors.firstName
      ? "err"
      : dirtyFields.firstName && !errors.firstName
      ? "ok"
      : ""
  }`}
/>
            {errors.firstName && (
              <div className="field-err">{errors.firstName.message}</div>
            )}
          </div>

          {/* Last Name */}
          <div className="field">
            <label>
              Last Name
              {dirtyFields.lastName && !errors.lastName && (
                <span className="label-badge">
                  <CheckIcon />
                </span>
              )}
            </label>
            <input
  {...register("lastName")}
  placeholder="Lovelace"
  className={`first-page-input ${
    errors.lastName
      ? "err"
      : dirtyFields.lastName && !errors.lastName
      ? "ok"
      : ""
  }`}
/>
            {errors.lastName && (
              <div className="field-err">{errors.lastName.message}</div>
            )}
          </div>
        </div>

        {/* Date of Birth */}
        <div className="field">
          <label>
            Date of Birth
            {dirtyFields.dob && !errors.dob && (
              <span className="label-badge">
                <CheckIcon />
              </span>
            )}
          </label>
          <input
            type="date"
            {...register("dob")}
            className={
              errors.dob ? "err" : dirtyFields.dob && !errors.dob ? "ok" : ""
            }
          />
          {errors.dob && <div className="field-err">{errors.dob.message}</div>}
        </div>
      </div>

      <div className="card-footer">
        <span />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={
            !!(
              errors.firstName ||
              errors.lastName ||
              errors.dob ||
              (!vals.firstName && !vals.lastName && !vals.dob)
            )
          }
        >
          Next →
        </button>
      </div>
    </form>
  );
}
