import { NextResponse } from "next/server";
import { put, get } from "@vercel/blob";

const KEY = "vacancy.json";

export async function GET() {
  try {
    const existing = await get(KEY);
    if (existing?.url) {
      const res = await fetch(existing.url, { cache: "no-store" });
      const data = await res.json();
      return NextResponse.json({ isVacant: !!data.isVacant });
    }
  } catch {}
  return NextResponse.json({ isVacant: false });
}

export async function POST(request: Request) {
  const adminToken = process.env.ADMIN_TOGGLE_TOKEN;
  const provided = request.headers.get("x-admin-token") || "";

  if (adminToken && provided !== adminToken) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  let isVacant = false;
  try {
    const existing = await get(KEY);
    if (existing?.url) {
      const res = await fetch(existing.url, { cache: "no-store" });
      const data = await res.json();
      isVacant = !!data.isVacant;
    }
  } catch {}

  try {
    const body = await request.json().catch(() => ({}));
    if (typeof body?.isVacant === "boolean") {
      isVacant = body.isVacant;
    } else {
      isVacant = !isVacant;
    }
  } catch {}

  const blob = await put(KEY, JSON.stringify({ isVacant }), {
    access: "public",
    contentType: "application/json; charset=utf-8",
  });

  return NextResponse.json({ ok: true, isVacant, url: blob.url });
}
