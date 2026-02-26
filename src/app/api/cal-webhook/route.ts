import { NextResponse } from "next/server";
import { Client as NotionClient } from "@notionhq/client";
import { google } from "googleapis";

const notion = new NotionClient({ auth: process.env.NOTION_API_KEY });

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT!),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const sheets = google.sheets({ version: "v4", auth });

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const attendee = body.payload.attendees[0];
    const name = attendee.name;
    const email = attendee.email;
    const phone = attendee.phoneNumber;

    const responses = body?.payload?.responses ?? {};
    const packageSelected = responses.attendeedesiredpackage?.value ?? [];

    const orgName = responses.organizationname?.value ?? "";

    await notion.pages.create({
      parent: { database_id: process.env.NOTION_LEAD_DATABASE_ID! },
      properties: {
        "Full Name": { title: [{ text: { content: name } }] },
        "Contact Email": { email },
        "Contact Phone": {
          phone_number: phone,
        },
        "Lead Source": {
          select: { name: "Website" }
        },
        "Company": { rich_text: [{ text: { content: orgName } }] },
        "Desired Package": { select: { name: packageSelected[0] || "Custom" } },
      },
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Bookings!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          name,
          email,
          phone,
          "Website",
          packageSelected[0] || "",
          "Not Called"
        ]],
      },
    });

    console.log("New lead added:", { name, email, phone, packageSelected, orgName });

    return NextResponse.json({ message: "Webhook processed successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Webhook error:", error);
    return NextResponse.json({ message: "Error processing webhook", error: error.message }, { status: 500 });
  }
}