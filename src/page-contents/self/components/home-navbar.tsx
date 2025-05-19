"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "@tanstack/react-router";
import { useTranslation } from "@/contexts/language-context";
import React from "react";

export function Navbar() {
  const t = useTranslation;
  const location = useLocation();
  const { pathname } = location;
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-16 items-center px-4 sm:px-6">
        <Link to="/" className="flex items-center space-x-2 min-w-fit">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <span className="text-lg font-bold text-primary-foreground">J</span>
          </div>
          <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            KulDev
          </span>
        </Link>
        <NavigationMenu className="hidden md:flex md:ml-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                {t("navbar.product")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          {t("navbar.tanstackSuite")}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {t("navbar.tanstackSuiteDescription")}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/docs/query"
                      >
                        <div className="text-sm font-medium leading-none">
                          {t("navbar.query")}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("navbar.queryDescription")}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/docs/table"
                      >
                        <div className="text-sm font-medium leading-none">
                          {t("navbar.table")}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("navbar.tableDescription")}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/docs/router"
                      >
                        <div className="text-sm font-medium leading-none">
                          {t("navbar.router")}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("navbar.routerDescription")}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/docs">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {t("navbar.docs")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/dashboard">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {t("navbar.dashboard")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/apps">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {t("navbar.apps")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {!isDashboard && (
              <>
                <Link to="/sign-in">
                  <Button variant="ghost" size="sm">
                    {t("navbar.signIn")}
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">{t("navbar.startBuilding")}</Button>
                </Link>
              </>
            )}
            <ModeToggle />
          </nav>
        </div>
      </div>
    </div>
  );
}
