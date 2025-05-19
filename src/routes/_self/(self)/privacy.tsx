import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_self/(self)/privacy")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_self/(self)/privacy"!</div>;
}
