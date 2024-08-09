import { PawPrint } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Dogs vs Cats",
    to: "/",
    icon: <PawPrint className="h-4 w-4 text-blue-600" />,
    page: <Index />,
  },
];
