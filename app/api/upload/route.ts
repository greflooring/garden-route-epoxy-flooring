import { NextResponse } from "next/server";
import { type UploadApiErrorResponse, type UploadApiResponse } from "cloudinary";
import cloudinary from "@/app/lib/cloudinary";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

export async function POST(request: Request) {
  try {
    const formData = await request.formData().catch(() => null);

    if (!formData) {
      return NextResponse.json(
        { success: false, error: "Invalid photo upload request." },
        { status: 400 }
      );
    }
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { success: false, error: "Please choose an image to upload." },
        { status: 400 }
      );
    }

    if (!ALLOWED_TYPES.has(file.type)) {
      return NextResponse.json(
        { success: false, error: "Please upload a JPG, PNG or WEBP image." },
        { status: 400 }
      );
    }

    if (file.size === 0) {
      return NextResponse.json(
        { success: false, error: "The selected image is empty." },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, error: "Each photo must be 5MB or smaller." },
        { status: 400 }
      );
    }

    if (
      !process.env.CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      return NextResponse.json(
        { success: false, error: "Photo upload is not configured." },
        { status: 500 }
      );
    }

    const bytes = Buffer.from(await file.arrayBuffer());

    const result = await new Promise<{
      secure_url: string;
      public_id: string;
    }>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "garden-route-epoxy/quote-photos",
          resource_type: "image",
          transformation: [
            { width: 1800, height: 1800, crop: "limit", quality: "auto", fetch_format: "auto" },
          ],
        },
        (error: UploadApiErrorResponse | undefined, uploadResult: UploadApiResponse | undefined) => {
          if (error || !uploadResult) {
            reject(error || new Error("Cloudinary returned no upload result."));
            return;
          }
          resolve({
            secure_url: uploadResult.secure_url,
            public_id: uploadResult.public_id,
          });
        }
      );

      stream.end(bytes);
    });

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
      name: file.name,
    });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return NextResponse.json(
      { success: false, error: "Photo upload failed. Please try again." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const publicId = typeof body.publicId === "string" ? body.publicId.trim() : "";

    if (!publicId || publicId.length > 500 || !publicId.startsWith("garden-route-epoxy/quote-photos/")) {
      return NextResponse.json(
        { success: false, error: "Invalid photo reference." },
        { status: 400 }
      );
    }

    await cloudinary.uploader.destroy(publicId, { resource_type: "image" });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Cloudinary delete error:", error);
    return NextResponse.json(
      { success: false, error: "Photo cleanup failed." },
      { status: 500 }
    );
  }
}
