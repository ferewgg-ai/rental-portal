import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

let vacancies: any[] = [
  {
    id: 1,
    title: "Spacious 4-Bedroom Townhouse in Waters Landing",
    rent: "2748.00",
    address: "13525 Demetrias Way, Germantown, MD 20874",
    bedrooms: "4",
    bathrooms: "2.5",
    squareFootage: "1600 sqft",
    amenities: "New appliances, Smart home system, Central AC, Finished basement",
    description: "Beautifully maintained townhouse in the Waters Landing community. Features spacious living areas, updated kitchen, and private backyard. Conveniently located near schools, shopping, and public transportation.",
    fileUrl: "",
    uploadedAt: new Date().toISOString(),
  },
];

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const title = formData.get("title") as string;
    const rent = formData.get("rent") as string;
    const address = formData.get("address") as string;
    const bedrooms = formData.get("bedrooms") as string;
    const bathrooms = formData.get("bathrooms") as string;
    const squareFootage = formData.get("squareFootage") as string;
    const amenities = formData.get("amenities") as string;
    const description = formData.get("description") as string;

    let fileUrl = "";
    if (file) {
      const blob = await put(file.name, file, { access: "public" });
      fileUrl = blob.url;
    }

    const vacancy = {
      id: vacancies.length + 1,
      title,
      rent,
      address,
      bedrooms,
      bathrooms,
      squareFootage,
      amenities,
      description,
      fileUrl,
      uploadedAt: new Date().toISOString(),
    };

    vacancies.push(vacancy);
    return NextResponse.json(vacancy);
  } catch (error) {
    console.error("Vacancy upload failed:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(vacancies);
}
