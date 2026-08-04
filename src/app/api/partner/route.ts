import { NextResponse } from "next/server";

interface PartnerPayload {
  name?: string;
  email?: string;
  phone?: string;
  organization?: string;
  partnerType?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: PartnerPayload;
  try {
    body = (await request.json()) as PartnerPayload;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const organization = (body.organization ?? "").trim();
  const partnerType = (body.partnerType ?? "").trim();
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
  if (!organization) {
    return NextResponse.json(
      { success: false, message: "Organization name is required." },
      { status: 400 }
    );
  }
  if (!partnerType) {
    return NextResponse.json(
      { success: false, message: "Please select a partnership type." },
      { status: 400 }
    );
  }

  console.log("[partner] new inquiry:", {
    name,
    email,
    phone,
    organization,
    partnerType,
    message,
    at: new Date().toISOString(),
  });

  return NextResponse.json({
    success: true,
    message:
      "Thank you for your interest in partnering with GAIN. Our partnerships team will review your inquiry and reach out within 2 to 3 business days.",
  });
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Partnership inquiry endpoint is live. Send a POST request to submit a partnership inquiry.",
  });
}
