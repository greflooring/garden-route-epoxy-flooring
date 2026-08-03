"use client";

import Button from "../ui/Button";

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-5 mt-10">

      <Button href="https://wa.me/27761260231">
        Get My Free Quote
      </Button>

      <Button
        href="#gallery"
        variant="secondary"
      >
        View Recent Projects
      </Button>

    </div>
  );
}