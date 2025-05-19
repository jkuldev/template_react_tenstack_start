import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_docs/docs/$lang/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_docs/docs/$lang/"!</div>;
}
