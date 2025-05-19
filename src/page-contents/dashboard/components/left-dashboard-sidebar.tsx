import React, { useState } from "react";
import { useTranslation } from "@/contexts/language-context";
import {
  PlayCircle,
  History,
  Star,
  Settings,
  Boxes,
  BookOpen,
  UserCircle,
  ChevronDown,
  ChevronUp,
  Building2,
  SlidersHorizontal,
  LogOut,
  Users,
  ChevronRight,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export const LeftDashboardSidebar: React.FC = () => {
  const t = useTranslation;
  const [playgroundOpen, setPlaygroundOpen] = useState(false);

  return (
    <Sidebar className="bg-background text-foreground border-r   p-1">
      <SidebarHeader>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="flex h-16 w-full items-center justify-between py-5 border-b  ">
              <div className="flex items-center gap-3">
                <div className="bg-background rounded-lg p-2">
                  <Building2 size={28} />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">Acme Inc</span>
                  <span className="text-xs text-muted-foreground">
                    Enterprise
                  </span>
                </div>
              </div>
              <ChevronRight size={20} className="text-muted-foreground" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="right"
            className="w-72 bg-background text-foreground  "
          >
            <DropdownMenuItem>
              <Users className="text-primary mr-2" />
              <span>{t("sidebar.manageMembers")}</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="text-primary mr-2" />
              <span>{t("sidebar.organizationSettings")}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>

      <SidebarContent>
        <div className="text-xs text-muted-foreground mb-2 px-4">
          {t("sidebar.platform")}
        </div>

        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => setPlaygroundOpen(!playgroundOpen)}
              className="flex items-center w-full"
            >
              <PlayCircle className="mr-3" />
              <span className="flex-1 text-left">
                {t("sidebar.playground")}
              </span>
              {playgroundOpen ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </SidebarMenuButton>
            {playgroundOpen && (
              <div className="ml-8 mt-1 flex flex-col gap-1">
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <History className="mr-2" /> {t("sidebar.history")}
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Star className="mr-2" /> {t("sidebar.starred")}
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Settings className="mr-2" /> {t("sidebar.settings")}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </div>
            )}
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <Boxes className="mr-3" /> {t("sidebar.models")}
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <BookOpen className="mr-3" /> {t("sidebar.documentation")}
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <SlidersHorizontal className="mr-3" /> {t("sidebar.settings")}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex h-12 w-full items-center justify-between py-4 border-t  ">
                  <div className="flex items-center gap-3">
                    <UserCircle size={36} className="text-primary" />
                    <div className="flex flex-col">
                      <span className="font-semibold text-base">shadcn</span>
                      <span className="text-xs text-muted-foreground">
                        m@example.com
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-muted-foreground" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                className="w-72 bg-background text-foreground  "
              >
                <DropdownMenuItem>
                  <UserCircle className="text-primary mr-2" />
                  <span>{t("sidebar.profile")}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="text-primary mr-2" />
                  <span>{t("sidebar.account")}</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <LogOut className="text-destructive mr-2" />
                  <span>{t("sidebar.signOut")}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
