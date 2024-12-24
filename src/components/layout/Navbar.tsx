import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";

interface NavbarProps {
  categories?: string[];
}

const Navbar = ({
  categories = ["Town Events", "Local Business", "Community News", "Weather"],
}: NavbarProps) => {
  return (
    <nav className="w-full h-16 border-b bg-background">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-primary">Small Town News</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {categories.map((category) => (
                <NavigationMenuItem key={category}>
                  <NavigationMenuLink
                    className="px-4 py-2 hover:text-primary transition-colors"
                    href="#"
                  >
                    {category}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search and Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
