import { Form, ActionFunctionArgs, redirect } from "react-router-dom";

type Contact = { name: string; email: string; reason: string; notes: string };

export function ContactPage() {
  const fieldStyle = "flex flex-col mb-2";

  return (
    <div className={fieldStyle}>
      <h2 className="text-3xl font-bold underline mb-3">Contact Us</h2>
      <p className="mb-3">
        If you enter your details we'll get back to you as soon as we can.
      </p>
      <Form method="post">
        <div className={fieldStyle}>
          <label htmlFor="name">Your name</label>
          <input
            className="border"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Your email address</label>
          <input
            className="border"
            type="email"
            id="email"
            name="email"
            required
            pattern="\S+@\S+\.\S+"
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us</label>
          <select id="reason" name="reason" required>
            <option value=""></option> <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Additional notes</label>
          <textarea className="border" id="notes" name="notes" />
        </div>
        <div>
          <button
            type="submit"
            className="mt-2 h-10 px-6 font-semibold bg-black text-white"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function contactPageAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const contact = {
    name: formData.get("name"),
    email: formData.get("email"),
    reason: formData.get("reason"),
    notes: formData.get("notes"),
  } as Contact;
  console.log("Submitted details:", contact);
  return redirect(`/thank-you/${formData.get("name")}`);
}
