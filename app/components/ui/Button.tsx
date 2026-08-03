import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold transition-all duration-300 ${
        variant === "primary"
          ? "bg-[#D4AF37] text-black hover:bg-[#E6C35C] shadow-lg shadow-[#D4AF37]/20"
          : "border border-white/15 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
      }`}
    >
      {children}
    </Link>
  );
}