interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      {eyebrow && (
        <p className="uppercase tracking-[4px] text-yellow-500 text-sm font-semibold">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}