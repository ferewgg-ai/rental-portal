import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    return NextResponse.json({ message: `Checkout successful for $${body.amount}` });
  } catch (err) {
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
