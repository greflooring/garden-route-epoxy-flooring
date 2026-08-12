import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[460px] overflow-hidden border-b border-white/10">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/hero-epoxy.png")' }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#080808]"
      />

      <div className="relative z-10 mx-auto flex min-h-[460px] max-w-7xl flex-col justify-center px-8 py-28 md:py-36">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
          {eyebrow}
        </p>

        <h1 className="mt-7 max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-200">
            {description}
          </p>
        ) : null}

        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
