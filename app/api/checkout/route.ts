// app/api/checkout/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json(); // JSON payload from client
    return NextResponse.json(
      { message: "Checkout working", received: body },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON or request" },
      { status: 400 },
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Checkout API GET working" },
    { status: 200 },
  );
}

