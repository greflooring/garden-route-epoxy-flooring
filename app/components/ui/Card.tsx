interface CardProps {
  children: React.ReactNode;
}

export default function Card({
  children,
}: CardProps) {
  return (
    <div className="
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-md
      p-8
      shadow-2xl
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-[#D4AF37]/40
    ">
      {children}
    </div>
  );
}