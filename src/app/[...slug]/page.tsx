import UnderMaintenance from "@/components/UnderMaintenance";

// Catch-all route: renders for every path that isn't the homepage (/).
// Replace individual route files as real pages are built out.
export default function CatchAllPage() {
  return <UnderMaintenance />;
}
