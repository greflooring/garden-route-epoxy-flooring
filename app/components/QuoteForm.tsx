"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    size: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Unable to send quote.");
      }

      setSuccess(true);

      setForm({
        name: "",
        phone: "",
        email: "",
        service: "",
        size: "",
        message: "",
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">

      <input
        required
        placeholder="Full Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
        className="rounded-xl bg-neutral-900 border border-white/10 px-5 py-4 text-white"
      />

      <input
        required
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value })
        }
        className="rounded-xl bg-neutral-900 border border-white/10 px-5 py-4 text-white"
      />

      <input
        required
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        className="rounded-xl bg-neutral-900 border border-white/10 px-5 py-4 text-white"
      />

      <select
        required
        value={form.service}
        onChange={(e) =>
          setForm({ ...form, service: e.target.value })
        }
        className="rounded-xl bg-neutral-900 border border-white/10 px-5 py-4 text-white"
      >
        <option value="">Select Project Type</option>
        <option>Garage Floor</option>
        <option>Metallic Epoxy</option>
        <option>Decorative Flake</option>
        <option>Stone Carpet</option>
        <option>Commercial Flooring</option>
      </select>

      <select
        required
        value={form.size}
        onChange={(e) =>
          setForm({ ...form, size: e.target.value })
        }
        className="rounded-xl bg-neutral-900 border border-white/10 px-5 py-4 text-white"
      >
        <option value="">Approximate Size</option>
        <option>Under 30m²</option>
        <option>30-60m²</option>
        <option>60-100m²</option>
        <option>100m²+</option>
      </select>

      <textarea
        required
        rows={6}
        placeholder="Tell us about your project..."
        value={form.message}
        onChange={(e) =>
          setForm({ ...form, message: e.target.value })
        }
        className="rounded-xl bg-neutral-900 border border-white/10 px-5 py-4 text-white"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-[#d4af37] py-4 font-bold text-black transition hover:bg-[#e6c75f] disabled:opacity-60"
      >
        {loading ? "Sending..." : "Request Quote"}
      </button>

      {success && (
        <p className="text-green-400 font-medium">
          ✅ Thank you! Your quote request has been sent successfully.
        </p>
      )}

      {error && (
        <p className="text-red-400 font-medium">
          {error}
        </p>
      )}

    </form>
  );
}