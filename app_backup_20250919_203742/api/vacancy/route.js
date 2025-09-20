import { NextResponse } from "next/server";

const vacancies = [
  {
    title: "Townhouse for Rent",
    rent: 2748,
    address: "13525 Demetrias Way, Germantown, MD 20874",
    bedrooms: 4,
    bathrooms: 2.5,
    squareFootage: "1600 sqft",
    amenities: "New appliances, Smart home access, Central AC",
    description: "Spacious 4-bedroom townhouse in Waters Landing community.",
    uploadedAt: new Date().toISOString(),
    fileUrl: null
  }
];

export async function GET() {
  return NextResponse.json(vacancies);
}
