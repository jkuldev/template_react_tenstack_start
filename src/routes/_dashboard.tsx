import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardBreadCrumb } from "@/page-contents/dashboard/components/dashboard-bread-crumb";
import { LeftDashboardSidebar } from "@/page-contents/dashboard/components/left-dashboard-sidebar";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <SidebarProvider>
        <LeftDashboardSidebar />
        <main className="flex-1 ">
          <div className="flex-1 flex flex-col">
            <DashboardBreadCrumb />
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
