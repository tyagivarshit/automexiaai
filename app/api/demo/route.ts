import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Demo from "@/models/Demo";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("New Demo Request:", body);

    // ✅ CONNECT DB
    await connectDB();

    // ✅ SAVE DATA
    const saved = await Demo.create({
      name: body.name,
      email: body.email,
    });

    console.log("Saved to DB ✅", saved);

    // ✅ SEND EMAIL
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.ADMIN_EMAIL!,
      subject: "🚀 New Demo Request",
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
      `,
    });

    console.log("Email sent ✅");

    return NextResponse.json({ success: true });

  } catch (error) {
    console.log("ERROR ❌:", error);
    return NextResponse.json({ error: "Something went wrong" });
  }
}