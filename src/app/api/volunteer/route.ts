import { NextResponse } from "next/server";

interface VolunteerPayload {
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  availability?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: VolunteerPayload;
  try {
    body = (await request.json()) as VolunteerPayload;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const role = (body.role ?? "").trim();
  const availability = (body.availability ?? "").trim();
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
  if (!role) {
    return NextResponse.json(
      { success: false, message: "Please select a preferred volunteer role." },
      { status: 400 }
    );
  }

  console.log("[volunteer] new application:", {
    name,
    email,
    phone,
    role,
    availability,
    message,
    at: new Date().toISOString(),
  });

  return NextResponse.json({
    success: true,
    message:
      "Thank you for your interest in volunteering with GAIN. Our team will review your application and reach out within 1 to 2 business days.",
  });
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Volunteer application endpoint is live. Send a POST request to apply.",
  });
}
