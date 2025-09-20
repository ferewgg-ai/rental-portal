import { NextResponse } from "next/server";

const ALLOWED = new Set(["application/pdf","image/jpeg","image/png"]);
const MAX_BYTES = 15 * 1024 * 1024; // 15MB

export const runtime = "nodejs"; // ensure Node runtime on Vercel

export async function POST(req) {
  try {
    const form = await req.formData();
    const fullName = String(form.get("fullName") || "");
    const email = String(form.get("email") || "");
    const unit = String(form.get("unit") || "");
    const notes = String(form.get("notes") || "");
    const files = form.getAll("files");

    const useBlob = !!process.env.BLOB_READ_WRITE_TOKEN;
    let put; // lazy import only if needed
    if (useBlob) {
      const mod = await import("@vercel/blob");
      put = mod.put;
    }

    const saved = [];
    for (const f of files) {
      if (!f || typeof f === "string") continue;

      const type = f.type || "";
      const size = f.size || 0;

      if (!ALLOWED.has(type)) {
        return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
      }
      if (size > MAX_BYTES) {
        return NextResponse.json({ error: "File too large" }, { status: 400 });
      }

      const ext = type === "application/pdf" ? ".pdf" : (type === "image/png" ? ".png" : ".jpg");
      const filename = `${encodeURIComponent(email)}/${Date.now()}_${Math.random().toString(36).slice(2)}${ext}`;

      if (useBlob) {
        const { url } = await put(filename, f, {
          access: "private",
          addRandomSuffix: false,
          token: process.env.BLOB_READ_WRITE_TOKEN,
          contentType: type,
        });
        saved.push({ filename, url, bytes: size, type });
      } else {
        // Local dev: write to /uploads (works locally; not for serverless!)
        const ab = await f.arrayBuffer();
        const buf = Buffer.from(ab);
        const fs = await import("fs/promises");
        const path = await import("path");
        const outDir = path.join(process.cwd(), "uploads", encodeURIComponent(email));
        await fs.mkdir(outDir, { recursive: true });
        const outPath = path.join(outDir, filename.split("/").pop());
        await fs.writeFile(outPath, buf);
        saved.push({ filename, path: outPath, bytes: size, type });
      }
    }

    return NextResponse.json({
      ok: true,
      fullName, email, unit, notes,
      files: saved,
      submittedAt: new Date().toISOString()
    });
  } catch (err) {
    return NextResponse.json({ ok: false, error: err?.message || "Server error" }, { status: 500 });
  }
}