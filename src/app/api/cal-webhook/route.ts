import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Cal.com Webhook Received:");
    console.log(JSON.stringify(body, null, 2));

    return NextResponse.json(
      { message: "Webhook received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Webhook error:", error);

    return NextResponse.json(
      { message: "Error processing webhook" },
      { status: 500 }
    );
  }
}