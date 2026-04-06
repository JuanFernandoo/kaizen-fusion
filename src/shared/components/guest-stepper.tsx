import { Button } from "@/shared"
import { Minus, Plus } from "lucide-react"

interface GuestStepperProps {
    value: number
    min?: number
    max?: number
    onChange: (value: number) => void
}

export default function GuestStepper({ value, min = 1, max = 10, onChange, }: GuestStepperProps) {

    const canDecrement = value > min
    const canIncrement = value < max

    const handleChange = (newValue: number) => {
        if (newValue < min || newValue > max) return
        onChange(newValue)
    }

    return (
        <div className="flex items-center justify-between w-full max-w-[320px] select-none">

            <Button
                variant="icon"
                onClick={() => handleChange(value - 1)}
                disabled={!canDecrement}
                aria-label="Disminuir comensales"
                className="group relative flex items-center justify-center size-14 md:size-16 rounded-lg bg-transparent border border-white/20 hover:border-gold-accent hover:bg-gold-accent/10 transition-all duration-300 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
                <Minus
                    className="text-slate-400 group-hover:text-gold-accent text-3xl transition-colors"
                />

            </Button>

            <span className="text-slate-50 text-6xl font-semibold mx-4">
                {value}
            </span>

            <Button
                variant="icon"
                onClick={() => handleChange(value + 1)}
                disabled={!canIncrement}
                aria-label="Aumentar comensales"
                className="group relative flex items-center justify-center size-14 md:size-16 rounded-lg bg-transparent border border-white/20 hover:border-gold-accent hover:bg-gold-accent/10 transition-all duration-300 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
                <Plus
                    className="text-slate-400 group-hover:text-gold-accent text-3xl transition-colors"
                />

            </Button>

        </div>
    )
}