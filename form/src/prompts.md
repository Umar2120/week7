1st. I'm building form for a website. I want to build a form that is broken into 3 separate views/components.can you help me with that?

1.The UI: Build a form that is broken into 3 separate views/components:

    a.Step 1: Personal Info (First Name, Last Name, Date of Birth).

    b.Step 2: Account Details (Email, Password, Confirm Password).

    c.Step 3: Review & Submit (Display all entered data so the user can check it).

2.The Navigation: Add "Next" and "Back" buttons to move between steps.

3.The State: Use React State (useState) in a Parent component to hold the data from all 3 steps. If I type my name in Step 1, go to Step 2, and click "Back", my name should still be there!

4.Submission: On Step 3, clicking "Submit" should console.log() the final data object and show a "Success!" screen.

2nd.Manual Validation & UX Polish.


1.Real-Time Validation: Don't wait for the user to click "Submit" to tell them they made a mistake.

    a.If the email doesn't have an @ symbol, show a red error text below the input as they type.

    b.Password must be at least 8 characters.

    c."Confirm Password" must exactly match "Password".

2.Disabled Buttons: The "Next" button should be disabled (unclickable) until all fields in the current step are valid.

3.UX Toggle: Add a "Show/Hide Password" eyeball icon inside the password inputs.

4.Progress Bar: Add a visual progress bar at the top (e.g., "Step 2 of 3").

3rd. last integration . 

1.Library Integration: Do not use basic useState for the form inputs. You MUST use the library react-hook-form.

2.Schema Validation: You MUST use zod or yup to define your validation schema.