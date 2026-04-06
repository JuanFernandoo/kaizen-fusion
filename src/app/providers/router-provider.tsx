import { RouterProvider } from "@tanstack/react-router";
import { router } from "@/app";

export function AppRouterProvider() {
    return <RouterProvider router={router} />
}