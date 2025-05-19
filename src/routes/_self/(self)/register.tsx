import { createFileRoute } from "@tanstack/react-router";
import { RegisterPage } from "@/page-contents/auth/register-page";
export const Route = createFileRoute("/_self/(self)/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return <RegisterPage />;
}
