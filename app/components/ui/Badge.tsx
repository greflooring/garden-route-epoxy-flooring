interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="
      inline-flex
      items-center
      rounded-full
      border
      border-[#D4AF37]/30
      bg-[#D4AF37]/10
      px-5
      py-2
      text-xs
      font-semibold
      uppercase
      tracking-[0.3em]
      text-[#D4AF37]
    ">
      {children}
    </span>
  );
}