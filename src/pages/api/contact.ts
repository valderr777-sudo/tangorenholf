import type { APIRoute } from "astro";

const parseRecipients = (value: string | undefined): string[] =>
	(value ?? "")
		.split(",")
		.map((item) => item.trim())
		.filter(Boolean);

export const GET: APIRoute = async ({ redirect }) => redirect("/contact", 303);

export const POST: APIRoute = async ({ request, redirect }) => {
	const formData = await request.formData();

	if (String(formData.get("_gotcha") ?? "").trim() !== "") {
		return redirect("/contact?sent=1", 303);
	}

	const firstName = String(formData.get("firstName") ?? "").trim();
	const lastName = String(formData.get("lastName") ?? "").trim();
	const email = String(formData.get("email") ?? "").trim();
	const phone = String(formData.get("phone") ?? "").trim();
	const message = String(formData.get("message") ?? "").trim();

	if (!firstName || !lastName || !phone || !message) {
		return redirect("/contact?sent=0", 303);
	}

	const apiKey = import.meta.env.BREVO_API_KEY;
	const recipients = parseRecipients(import.meta.env.CONTACT_TO);
	const senderEmail = import.meta.env.CONTACT_FROM_EMAIL;
	const senderName = import.meta.env.CONTACT_FROM_NAME || "Tangoren Holf Website";

	if (!apiKey || !senderEmail || recipients.length === 0) {
		console.error("Missing Brevo env vars: BREVO_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO");
		return redirect("/contact?sent=0", 303);
	}

	const textLines = [
		`First name: ${firstName}`,
		`Last name: ${lastName}`,
		`Email: ${email || "-"}`,
		`Phone: ${phone}`,
		"",
		"Message:",
		message,
	];

	const response = await fetch("https://api.brevo.com/v3/smtp/email", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"api-key": apiKey,
		},
		body: JSON.stringify({
			sender: {
				email: senderEmail,
				name: senderName,
			},
			to: recipients.map((recipient) => ({ email: recipient })),
			...(email ? { replyTo: { email } } : {}),
			subject: "New message from Tangoren Holf website",
			textContent: textLines.join("\n"),
		}),
	});

	if (!response.ok) {
		const body = await response.text();
		console.error("Brevo send failed:", response.status, body);
		return redirect("/contact?sent=0", 303);
	}

	return redirect("/contact?sent=1", 303);
};
