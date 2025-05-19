import { useTranslation } from "@/contexts/language-context";
import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

export const Route = createFileRoute("/_dashboard/dashboard/")({
  component: DashboardPage,
});

function DashboardPage() {
  const t = useTranslation;
  return (
    <div className="flex h-full">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">{t("dashboard.dashboard")}</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Stats Cards */}
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-lg border">
              <h3 className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

const stats = [
  { label: "Total Users", value: "1,234" },
  { label: "Active Projects", value: "56" },
  { label: "Revenue", value: "$12,345" },
];
