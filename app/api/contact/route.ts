import { NextResponse } from "next/server";
import type { ContactRequest } from "@/lib/data";

const FALLBACK_RECIPIENTS = ["tayistrebitel@mail.ru", "tayistrebite10@gmail.ru"];

function getRecipients() {
  const configured = process.env.CONTACT_FORWARD_EMAILS?.split(",").map((value) => value.trim()).filter(Boolean);
  return configured && configured.length > 0 ? configured : FALLBACK_RECIPIENTS;
}

function isValidRequest(payload: Partial<ContactRequest>): payload is ContactRequest {
  return Boolean(
    payload &&
      typeof payload.name === "string" &&
      payload.name.trim() &&
      typeof payload.email === "string" &&
      payload.email.trim() &&
      typeof payload.projectType === "string" &&
      payload.projectType.trim() &&
      typeof payload.message === "string" &&
      payload.message.trim()
  );
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<ContactRequest>;

    if (!isValidRequest(payload)) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // NOTE: Integrate with email provider (e.g., Resend) here.
    console.log("contact-request", {
      projectType: payload.projectType,
      recipients: getRecipients(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("contact-request-error", error);
    return NextResponse.json(
      { success: false, error: "Unable to process request right now." },
      { status: 500 }
    );
  }
}
