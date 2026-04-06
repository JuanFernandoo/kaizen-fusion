import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/app";
import { MenuDetailPage } from "@/features";

export const MenuDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/menu/$id",
  component: MenuDetailPage,
});