import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_apps/apps/")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /apps/!";
}
