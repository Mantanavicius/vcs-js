import { useActionData, Form, redirect } from "react-router-dom";

export default function Contact() {
  const data = useActionData();
  return (
    <div className="contact">
      <h2>Susisiekite su mumis</h2>
      <Form
        method="post"
        action="/help/contact">
        <label>
          <span>Jūsų el. paštas:</span>
          <input
            type="email"
            name="email"
            required
          />
        </label>
        <label>
          <span>Jūsų žinutė:</span>
          <textarea
            name="message"
            required></textarea>
        </label>
        <button>Siųsti</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };
  console.log(submission);
  if (submission.message.length < 10) {
    return { error: "Žinutė turi būti ne mažiau 10 simbolių." };
  }
  return redirect("/");
};
