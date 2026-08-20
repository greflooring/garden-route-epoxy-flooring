"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ImagePlus,
  Loader2,
  MessageCircle,
  RefreshCw,
  Send,
  X,
} from "lucide-react";
import { services } from "@/app/data/services";

type UploadedPhoto = {
  url: string;
  publicId: string;
  name: string;
};

const MAX_PHOTOS = 5;
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const WHATSAPP_NUMBER = "27610692503";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  town: "",
  service: "",
  size: "",
  message: "",
  website: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [submittedPhotoCount, setSubmittedPhotoCount] = useState(0);
  const [error, setError] = useState("");
  const [photos, setPhotos] = useState<UploadedPhoto[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const busy = loading || uploading;

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) setError("");
    if (success) setSuccess(false);
  }

  async function uploadPhotos(files: FileList | null) {
    if (!files || files.length === 0 || busy) return;

    setError("");
    setSuccess(false);

    const remaining = MAX_PHOTOS - photos.length;
    if (remaining <= 0) {
      setError(`You can upload a maximum of ${MAX_PHOTOS} photos.`);
      return;
    }

    const selected = Array.from(files).slice(0, remaining);
    const ignoredCount = files.length - selected.length;

    const invalid = selected.find(
      (file) => !ALLOWED_TYPES.includes(file.type) || file.size > MAX_FILE_SIZE
    );

    if (invalid) {
      setError(
        `${invalid.name} is not valid. Please use a JPG, PNG or WEBP image under 5MB.`
      );
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (ignoredCount > 0) {
      setError(`Only ${MAX_PHOTOS} photos can be uploaded with one quote.`);
    }

    setUploading(true);
    setUploadProgress(0);

    let completed = 0;

    try {
      for (const file of selected) {
        const body = new FormData();
        body.append("file", file);

        const response = await fetch("/api/upload", {
          method: "POST",
          body,
        });

        const result = await response.json().catch(() => null);

        if (!response.ok || !result?.success) {
          throw new Error(
            result?.error || `Upload failed for ${file.name}.`
          );
        }

        const uploadedPhoto: UploadedPhoto = {
          url: result.url,
          publicId: result.publicId,
          name: result.name || file.name,
        };

        setPhotos((current) => [...current, uploadedPhoto]);
        completed += 1;
        setUploadProgress(Math.round((completed / selected.length) * 100));
      }
    } catch (uploadError) {
      console.error("Photo upload failed:", uploadError);
      setError(
        uploadError instanceof Error
          ? uploadError.message
          : "One or more photos could not be uploaded. Please try again."
      );
    } finally {
      setUploading(false);
      setUploadProgress(0);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  async function removePhoto(publicId: string) {
    if (busy) return;

    const photoToRemove = photos.find((photo) => photo.publicId === publicId);
    setPhotos((current) => current.filter((photo) => photo.publicId !== publicId));
    setError("");

    if (!photoToRemove) return;

    try {
      const response = await fetch("/api/upload", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId }),
      });

      if (!response.ok) {
        console.warn("Cloudinary photo cleanup failed for", publicId);
      }
    } catch (cleanupError) {
      console.warn("Cloudinary photo cleanup failed:", cleanupError);
    }
  }

  function resetForm() {
    setForm(initialForm);
    setPhotos([]);
    setError("");
    setSuccess(false);
    setSubmittedPhotoCount(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (busy) return;

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, photos }),
      });

      const result = await res.json().catch(() => null);

      if (!res.ok || !result?.success) {
        throw new Error(result?.error || "Unable to send your quote request.");
      }

      setSubmittedPhotoCount(photos.length);
      setSuccess(true);
      setForm(initialForm);
      setPhotos([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (submitError) {
      console.error("Quote submission failed:", submitError);
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputStyle =
    "w-full rounded-2xl border border-white/10 bg-[#0F0F0F] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 disabled:cursor-not-allowed disabled:opacity-60";

  if (success) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-[28px] border border-green-500/25 bg-green-500/10 p-8 text-center sm:p-10"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15">
          <CheckCircle2 size={34} className="text-green-400" />
        </div>
        <h3 className="mt-6 text-3xl font-black text-white">
          Quote Request Received!
        </h3>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-300">
          Thanks for getting in touch. We&apos;ve received your project details
          {submittedPhotoCount > 0
            ? ` and ${submittedPhotoCount} project photo${submittedPhotoCount === 1 ? "" : "s"}`
            : ""}.
          We&apos;ll be in touch as soon as possible.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi Garden Route Epoxy Flooring, I have just submitted a quote request and would like to follow up."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 font-black text-black transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
          <button
            type="button"
            onClick={resetForm}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 font-bold text-white transition hover:bg-white/10"
          >
            <RefreshCw size={19} />
            Send Another Quote
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-busy={busy}>
      <div className="absolute -left-[10000px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => updateField("website", e.target.value)}
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <input
          required
          disabled={busy}
          autoComplete="name"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          className={inputStyle}
        />
        <input
          required
          disabled={busy}
          autoComplete="tel"
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          className={inputStyle}
        />
        <input
          required
          disabled={busy}
          autoComplete="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          className={inputStyle}
        />
        <input
          required
          disabled={busy}
          autoComplete="address-level2"
          placeholder="Town / Area"
          value={form.town}
          onChange={(e) => updateField("town", e.target.value)}
          className={inputStyle}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <select
          required
          disabled={busy}
          value={form.service}
          onChange={(e) => updateField("service", e.target.value)}
          className={inputStyle}
        >
          <option value="">Select Flooring Service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
        <select
          required
          disabled={busy}
          value={form.size}
          onChange={(e) => updateField("size", e.target.value)}
          className={inputStyle}
        >
          <option value="">Approximate Area</option>
          <option>Under 30m²</option>
          <option>30–60m²</option>
          <option>60–100m²</option>
          <option>100m²+</option>
        </select>
      </div>

      <textarea
        required
        disabled={busy}
        rows={7}
        placeholder="Tell us about your project..."
        value={form.message}
        onChange={(e) => updateField("message", e.target.value)}
        className={inputStyle}
      />

      <div className="rounded-2xl border border-dashed border-[#D4AF37]/30 bg-[#0F0F0F] p-5 sm:p-6">
        <input
          ref={fileInputRef}
          id="photos"
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          disabled={busy || photos.length >= MAX_PHOTOS}
          onChange={(e) => uploadPhotos(e.target.files)}
        />
        <label
          htmlFor="photos"
          className={`flex min-h-32 flex-col items-center justify-center rounded-2xl px-4 text-center transition ${
            photos.length >= MAX_PHOTOS
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer hover:bg-white/[0.03]"
          }`}
        >
          {uploading ? (
            <Loader2 size={36} className="animate-spin text-[#D4AF37]" />
          ) : (
            <ImagePlus size={36} className="text-[#D4AF37]" />
          )}
          <h3 className="mt-4 font-bold text-white">
            {uploading
              ? `Uploading Photos… ${uploadProgress}%`
              : photos.length >= MAX_PHOTOS
                ? "5 Photos Added"
                : "Upload Project Photos"}
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            Optional • {photos.length}/{MAX_PHOTOS} photos • JPG, PNG or WEBP • Max 5MB each
          </p>
          {uploading && (
            <div className="mt-4 h-2 w-full max-w-xs overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[#D4AF37] transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          )}
        </label>

        {photos.length > 0 && (
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {photos.map((photo) => (
              <div
                key={photo.publicId}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40"
              >
                <Image
                  src={photo.url}
                  alt={photo.name}
                  width={320}
                  height={320}
                  unoptimized
                  className="aspect-square w-full object-cover"
                />
                <button
                  type="button"
                  aria-label={`Remove ${photo.name}`}
                  onClick={() => removePhoto(photo.publicId)}
                  disabled={busy}
                  className="absolute right-2 top-2 rounded-full bg-black/80 p-2 text-white transition hover:bg-red-500 disabled:opacity-50"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {error && (
        <div
          role="alert"
          aria-live="assertive"
          className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-300"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={busy}
        className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#E6C75F] py-5 text-lg font-black uppercase tracking-wider text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(212,175,55,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="mr-3 animate-spin" size={22} />
            Sending Your Quote…
          </>
        ) : (
          <>
            <Send className="mr-3" size={21} />
            Request Free Quote
          </>
        )}
      </button>

      <p className="text-center text-xs leading-5 text-gray-500">
        Your details are used only to respond to your quote request. Photos are securely uploaded and shared with our quoting team.
      </p>
    </form>
  );
}
