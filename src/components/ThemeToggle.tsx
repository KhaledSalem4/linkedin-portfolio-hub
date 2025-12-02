import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 rounded-full border-2 border-border bg-card/80 backdrop-blur-sm hover:bg-card hover:scale-110 transition-all duration-300 shadow-glow"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-accent transition-all" />
      ) : (
        <Moon className="h-5 w-5 text-primary transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
