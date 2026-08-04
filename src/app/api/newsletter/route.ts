import { NextResponse } from "next/server";

interface NewsletterPayload {
  email?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// In-memory store for demonstration (per server instance)
const subscribers = new Set<string>();

export async function POST(request: Request) {
  let body: NewsletterPayload;
  try {
    body = (await request.json()) as NewsletterPayload;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const email = (body.email ?? "").trim().toLowerCase();

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (subscribers.has(email)) {
    return NextResponse.json({
      success: true,
      message: "You're already subscribed. Thank you for staying with us!",
    });
  }

  subscribers.add(email);
  console.log("[newsletter] new subscriber:", email, "total:", subscribers.size);

  return NextResponse.json({
    success: true,
    message:
      "You're subscribed! Watch your inbox for campaign updates, event invitations, and impact stories from GAIN.",
  });
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Newsletter endpoint is live.",
    subscribers: subscribers.size,
  });
}
