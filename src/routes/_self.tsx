import { HomeFooter } from "@/page-contents/self/components/home-footer";
import { Navbar } from "@/page-contents/self/components/home-navbar";
import { Outlet, createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/_self")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <Outlet />
      <HomeFooter />
    </div>
  );
}
