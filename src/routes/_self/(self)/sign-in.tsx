import { createFileRoute } from "@tanstack/react-router";
import { SignInPage } from "@/page-contents/auth/sign-in-page";

export const Route = createFileRoute("/_self/(self)/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignInPage />;
}
