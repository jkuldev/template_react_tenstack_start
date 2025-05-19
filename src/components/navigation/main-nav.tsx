import { cn } from "../../lib/utils";
import { Link, useRouter } from "@tanstack/react-router";
interface MainNavProps extends React.HTMLAttributes<HTMLElement> {}

export function MainNav({ className, ...props }: MainNavProps) {
  const router = useRouter();
  const pathname = router.state.location.pathname;

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        to="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Home
      </Link>
      <Link
        to="/projects"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/projects" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Projects
      </Link>
      <Link
        to="/tasks"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/tasks" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Tasks
      </Link>
      <Link
        to="/settings"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/settings" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Settings
      </Link>
    </nav>
  );
}
