import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/app";
import { CartPage} from "@/features";

export const CartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: CartPage,
});