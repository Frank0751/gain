import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name) {
    return NextResponse.json(
      { success: false, message: "Name is required." },
      { status: 400 }
    );
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { success: false, message: "A valid email is required." },
      { status: 400 }
    );
  }
  if (!message) {
    return NextResponse.json(
      { success: false, message: "Message cannot be empty." },
      { status: 400 }
    );
  }

  // Log the contact submission (no external email service in this environment)
  console.log("[contact] new submission:", {
    name,
    email,
    subject: subject || "(no subject)",
    message,
    at: new Date().toISOString(),
  });

  return NextResponse.json({
    success: true,
    message:
      "Thank you for reaching out to Green Awareness International. Our team will get back to you within 1 to 2 business days.",
  });
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Contact endpoint is live. Send a POST request to submit a message.",
  });
}
