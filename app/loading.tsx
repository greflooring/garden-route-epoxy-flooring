export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080808]">
      <div className="flex flex-col items-center">

        <div className="h-20 w-20 animate-spin rounded-full border-4 border-[#D4AF37]/20 border-t-[#D4AF37]" />

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
          Loading...
        </p>

      </div>
    </main>
  );
}