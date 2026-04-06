import { Button, GuestStepper } from "@/shared"
import type { ReservationCardTypes } from "@/features"
import { ArrowRight, Info, UtensilsCrossed } from 'lucide-react';

export default function ReservationCard({ value, min, max, onChange, onAssign }: ReservationCardTypes) {
    return (
        <div className="relative w-full max-w-lg mx-auto px-4">

            <div className="flex items-center justify-center gap-3 mb-12 text-center">
                <UtensilsCrossed className="w-6 h-6 text-primary opacity-90" />
                <h1 className="text-xl font-semibold tracking-[0.25em] text-white">
                    KAIZEN - FUSION
                </h1>
            </div>

            <div className="relative bg-linear-to-b from-[#2a1418] to-[#1a0d10] border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl flex flex-col items-center text-center overflow-hidden">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(193,11,45,0.15),transparent_60%)] pointer-events-none" />

                <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-5 opacity-80">
                    Inicia tu experiencia
                </span>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    ¿Cuántas personas son?
                </h2>

                <p className="text-slate-400 text-sm md:text-base mb-10 max-w-xs leading-relaxed">
                    Te asignaremos la mejor mesa disponible según tu grupo.
                </p>

                <div className="mb-8">
                    <GuestStepper
                        value={value}
                        min={min}
                        max={max}
                        onChange={onChange}
                    />
                </div>

                <Button
                    variant="primary"
                    onClick={onAssign}
                    className="w-full mt-2 text-white font-semibold text-lg py-4 rounded-xl 
          bg-primary hover:bg-primary/90
          shadow-[0_8px_30px_rgba(193,11,45,0.45)]
          transition-all duration-200 
          hover:scale-[1.02] active:scale-[0.98]
          flex items-center justify-center gap-2 group"
                    icon={<ArrowRight className="group-hover:translate-x-1 transition-transform" />}
                >
                    ASIGNAR MESA
                </Button>

                <button className="mt-6 text-slate-500 hover:text-slate-300 text-xs transition-colors flex items-center gap-2">
                    <Info className="w-4 h-4 opacity-70" />
                    ¿Necesitas ayuda?
                </button>
            </div>
        </div>
    );
}