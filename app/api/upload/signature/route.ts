import { NextResponse } from "next/server";
import cloudinary from "@/app/lib/cloudinary";

export async function POST() {
  try {
    const timestamp = Math.floor(Date.now() / 1000);
    const folder = "garden-route-epoxy-flooring/quotes";

    const signature = cloudinary.utils.api_sign_request(
      { timestamp, folder },
      process.env.CLOUDINARY_API_SECRET!
    );

    return NextResponse.json({
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      timestamp,
      folder,
      signature,
    });
  } catch (error) {
    console.error("Cloudinary signature error:", error);
    return NextResponse.json(
      { success: false, error: "Unable to prepare photo upload." },
      { status: 500 }
    );
  }
}
