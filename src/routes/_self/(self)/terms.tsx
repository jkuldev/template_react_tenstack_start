import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_self/(self)/terms")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_self/(self)/terms"!</div>;
}
