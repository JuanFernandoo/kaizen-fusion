import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/app";
import { ConfirmationPage } from "@/features";

export const ConfirmationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/confirmation",
  component: ConfirmationPage,
});