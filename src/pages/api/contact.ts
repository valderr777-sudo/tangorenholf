import type { APIRoute } from "astro";

const parseRecipients = (value: string | undefined): string[] =>
	(value ?? "")
		.split(",")
		.map((item) => item.trim())
		.filter(Boolean);

export const GET: APIRoute = async ({ redirect }) => redirect("/contact", 303);

export const POST: APIRoute = async ({ request, redirect }) => {
	console.info("[contact] POST received");

	const formData = await request.formData();

	if (String(formData.get("_gotcha") ?? "").trim() !== "") {
		console.info("[contact] Honeypot field filled, treating as successful no-op");
		return redirect("/contact?sent=1", 303);
	}

	const firstName = String(formData.get("firstName") ?? "").trim();
	const lastName = String(formData.get("lastName") ?? "").trim();
	const email = String(formData.get("email") ?? "").trim();
	const phone = String(formData.get("phone") ?? "").trim();
	const message = String(formData.get("message") ?? "").trim();

	if (!firstName || !lastName || !phone || !message) {
		console.warn("[contact] Validation failed", {
			hasFirstName: Boolean(firstName),
			hasLastName: Boolean(lastName),
			hasPhone: Boolean(phone),
			hasMessage: Boolean(message),
		});
		return redirect("/contact?sent=0", 303);
	}

	const apiKey = import.meta.env.BREVO_API_KEY;
	const recipients = parseRecipients(import.meta.env.CONTACT_TO);
	const senderEmail = import.meta.env.CONTACT_FROM_EMAIL;
	const senderName = import.meta.env.CONTACT_FROM_NAME || "TANGOREN HOLF Website";

	if (!apiKey || !senderEmail || recipients.length === 0) {
		console.error("[contact] Missing Brevo env vars", {
			hasBrevoApiKey: Boolean(apiKey),
			hasContactFromEmail: Boolean(senderEmail),
			contactToCount: recipients.length,
		});
		return redirect("/contact?sent=0", 303);
	}

	console.info("[contact] Sending via Brevo", {
		senderEmail,
		senderName,
		recipientCount: recipients.length,
		hasReplyTo: Boolean(email),
	});

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
			subject: "New message from TANGOREN HOLF website",
			textContent: textLines.join("\n"),
		}),
	});

	if (!response.ok) {
		const body = await response.text();
		console.error("[contact] Brevo send failed", {
			status: response.status,
			body,
		});
		return redirect("/contact?sent=0", 303);
	}

	console.info("[contact] Brevo send succeeded");
	return redirect("/contact?sent=1", 303);
};
