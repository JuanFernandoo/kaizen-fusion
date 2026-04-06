import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/app";
import { CheckoutPage} from "@/features";

export const CheckoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: CheckoutPage,
});