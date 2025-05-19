import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_self/(self)/settings")({
  component: () => (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p className="text-gray-600">Configure your application settings here.</p>
    </div>
  ),
});
