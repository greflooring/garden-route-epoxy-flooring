"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, ArrowLeft } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080808] px-6">
      <div className="max-w-xl text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10">
          <RefreshCw className="h-10 w-10 text-[#D4AF37]" />
        </div>

        <h1 className="mt-10 text-5xl font-black text-white">
          Something went wrong
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <button
            onClick={reset}
            className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E6C75F] px-8 py-4 font-bold uppercase tracking-wider text-black transition hover:-translate-y-1"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-8 py-4 font-bold uppercase tracking-wider text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back Home
          </Link>

        </div>

      </div>
    </main>
  );
}