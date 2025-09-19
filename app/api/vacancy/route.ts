import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const title = formData.get("title") as string;
    const rent = formData.get("rent") as string;
    const address = formData.get("address") as string;
    const description = formData.get("description") as string;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Upload file to Vercel Blob
    const blob = await put(file.name, file, { access: "public" });

    // Return vacancy data + file URL
    return NextResponse.json({
      title,
      rent,
      address,
      description,
      fileUrl: blob.url,
      uploadedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Vacancy upload failed:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
