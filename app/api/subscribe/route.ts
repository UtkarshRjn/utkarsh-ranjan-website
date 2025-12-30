import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Buttondown API integration
    // Get your API key from: https://buttondown.email/settings/api
    const BUTTONDOWN_API_KEY = process.env.BUTTONDOWN_API_KEY;

    if (!BUTTONDOWN_API_KEY) {
      // If no API key is set, just log and return success for development
      console.log("New subscriber (no API key set):", email);
      return NextResponse.json({
        message: "Subscribed successfully!",
      });
    }

    const response = await fetch(
      "https://api.buttondown.email/v1/subscribers",
      {
        method: "POST",
        headers: {
          Authorization: `Token ${BUTTONDOWN_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          tags: ["website"],
        }),
      }
    );

    if (response.status === 201) {
      return NextResponse.json({
        message: "Subscribed successfully!",
      });
    }

    if (response.status === 409) {
      return NextResponse.json({
        message: "You're already subscribed!",
      });
    }

    const data = await response.json();
    return NextResponse.json(
      { error: data.detail || "Failed to subscribe" },
      { status: response.status }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
