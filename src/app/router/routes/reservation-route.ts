import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/app";
import { ReservationPage } from "@/features";

export const ReservationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: ReservationPage,
});