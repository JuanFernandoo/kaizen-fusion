import { Outlet } from "@tanstack/react-router";
import { Footer } from "@/shared";

export default function MainLayout() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col architectural-bg overflow-x-hidden">
            <main className="grow flex items-center justify-center p-4 md:p-8 relative">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
