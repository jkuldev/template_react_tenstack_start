import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_self/(self)/tasks")({
  component: () => (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <p className="text-gray-600">Your tasks will be listed here.</p>
    </div>
  ),
});
