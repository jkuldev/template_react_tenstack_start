import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0  transition-all dark:-rotate-90 " />
      ) : (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90  transition-all dark:rotate-0 " />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
