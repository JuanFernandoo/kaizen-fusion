import { cn } from "@/lib"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean
    icon?: ReactNode
    variant?: "primary" | "ghost" | "icon"
}

export default function Button({ children, loading, disabled, icon, variant = "primary", className, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            disabled={disabled || loading}
            className={cn(
                "flex items-center justify-center gap-2 transition-all",
                {
                    "w-full bg-primary text-white font-bold py-4 rounded-lg shadow hover:bg-[#a00925]":
                        variant === "primary",

                    "bg-transparent border border-white/20 hover:border-gold-accent hover:bg-gold-accent/10":
                        variant === "ghost",

                    "size-14 md:size-16 rounded-lg border border-white/20":
                        variant === "icon",
                },

                "disabled:opacity-50 disabled:cursor-not-allowed",
                className
            )}
        >
            {loading ? "Cargando..." : children}
            {!loading && icon}
        </button>
    )
}