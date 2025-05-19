import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_self/(self)/projects")({
  component: () => (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <p className="text-gray-600">Your projects will be listed here.</p>
    </div>
  ),
});
