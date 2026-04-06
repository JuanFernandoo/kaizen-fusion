import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/app";
import { MenuPage } from "@/features";

export const MenuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/menu",
  component: MenuPage,
});