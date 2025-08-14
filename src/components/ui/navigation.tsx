import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Users, Wallet, BarChart3 } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Navigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center transition-transform group-hover:scale-110">
            <Users className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AhjoorCircle
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          <Button
            variant={isActive("/") ? "default" : "ghost"}
            size="sm"
            asChild
            className="transition-all"
          >
            <Link to="/">Home</Link>
          </Button>
          <Button
            variant={isActive("/dashboard") ? "default" : "ghost"}
            size="sm"
            asChild
            className="transition-all"
          >
            <Link to="/dashboard" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button size="sm" className="bg-gradient-to-r from-accent to-warning hover:opacity-90 transition-opacity">
            <Wallet className="h-4 w-4 mr-2" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
}