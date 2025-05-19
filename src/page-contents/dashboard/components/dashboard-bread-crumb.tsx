import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, Home } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";

const items: { label: string; href: string }[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
];

export const DashboardBreadCrumb: React.FC = () => {
  return (
    <>
      <div className="px-2 py-2 flex items-center gap-2">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
        </div>
        <Breadcrumb>
          {items.map((item) => (
            <BreadcrumbItem key={item.label}>
              <Link to={item.href}>{item.label}</Link>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
        <div className="flex items-center gap-2 ml-auto">
          <ModeToggle />
        </div>
      </div>
      <Separator />
    </>
  );
};
