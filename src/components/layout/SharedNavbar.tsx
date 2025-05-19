import * as React from "react";
import { Link } from "@tanstack/react-router";
import { ModeToggle } from "../mode-toggle";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

export function SharedNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <nav className="flex h-16 items-center">
          <div className="mr-4 flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl">Logo</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="flex items-center space-x-1">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/docs" target="_blank" rel="noopener noreferrer">
                Documentation
              </NavLink>
              <NavLink
                to="/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dashboard
              </NavLink>
            </div>
            <div className="flex items-center space-x-2">
              <nav className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://github.com/your-repo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
                <ModeToggle />
              </nav>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

interface NavLinkProps {
  to: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

function NavLink({ to, children, target, rel }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      )}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}
