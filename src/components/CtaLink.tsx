import Link from "next/link";
import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  /** Layout-only classes (margin, alignment). Visual style is fixed. */
  className?: string;
};

/**
 * Unified secondary CTA — amber, 16px, with a trailing arrow that slides
 * right and deepens to the hover amber on hover. Used for every
 * section-footer "Explore / View / Learn" link. Pass the label without a
 * trailing arrow; the component adds it.
 */
export function CtaLink({ href, children, className }: CtaLinkProps) {
  return (
    <Link href={href} className={`mbh-cta-link${className ? ` ${className}` : ""}`}>
      <span>{children}</span>
      <span className="mbh-cta-arrow" aria-hidden="true">→</span>
    </Link>
  );
}
