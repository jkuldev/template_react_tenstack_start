import { createFileRoute } from "@tanstack/react-router";
import LandingHomePage from "@/page-contents/self/landing";

export const Route = createFileRoute("/_self/(self)/")({
  component: () => <LandingHomePage />,
});
