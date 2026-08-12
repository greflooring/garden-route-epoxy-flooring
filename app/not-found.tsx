import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080808] px-6">

      <div className="max-w-2xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
          Error 404
        </p>

        <h1 className="mt-8 text-6xl font-black text-white md:text-7xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-xl leading-9 text-gray-400">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E6C75F] px-10 py-5 font-bold uppercase tracking-wider text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(212,175,55,0.35)]"
          >
            <Home className="mr-3 h-5 w-5" />
            Back Home
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-10 py-5 font-bold uppercase tracking-wider text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            <ArrowLeft className="mr-3 h-5 w-5" />
            View Services
          </Link>

        </div>

      </div>

    </main>
  );
}