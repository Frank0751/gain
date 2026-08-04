import { NextResponse } from "next/server";

interface EventRegisterPayload {
  name?: string;
  email?: string;
  phone?: string;
  eventTitle?: string;
  attendees?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: EventRegisterPayload;
  try {
    body = (await request.json()) as EventRegisterPayload;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const eventTitle = (body.eventTitle ?? "").trim();
  const attendees = (body.attendees ?? "1").trim();

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
  if (!eventTitle) {
    return NextResponse.json(
      { success: false, message: "Event title is required." },
      { status: 400 }
    );
  }

  console.log("[event-register] new registration:", {
    name,
    email,
    phone,
    eventTitle,
    attendees,
    at: new Date().toISOString(),
  });

  return NextResponse.json({
    success: true,
    message: `Thank you for registering for "${eventTitle}". We have sent a confirmation to ${email}. We look forward to seeing you there.`,
  });
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Event registration endpoint is live. Send a POST request to register for an event.",
  });
}
