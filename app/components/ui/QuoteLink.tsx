"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import type { ReactNode, MouseEvent } from "react";

interface QuoteLinkProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function QuoteLink({ children, className, onClick }: QuoteLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const shouldScroll = useRef(false);

  useEffect(() => {
    if (pathname !== "/" || !shouldScroll.current) return;

    shouldScroll.current = false;
    requestAnimationFrame(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [pathname]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();

    if (pathname === "/") {
      event.preventDefault();
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", "/#contact");
      return;
    }

    event.preventDefault();
    shouldScroll.current = true;
    router.push("/#contact");
  };

  return (
    <a href="/#contact" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
