import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_docs")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div className="p-2">
      <div className="border-b">I'm a docs layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
