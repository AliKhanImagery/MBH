import { notFound } from "next/navigation";

// Catch-all route: triggers true HTTP 404 for unhandled paths to eliminate soft-404 crawl issues.
export default function CatchAllPage() {
  notFound();
}
