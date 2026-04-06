import { CheckIcon } from "lucide-react"

interface Props {
    tableNumber: number
}

export default function TableAssignedRing({ tableNumber }: Props) {
    return (
        <div className="relative flex items-center justify-center">

            <div className="absolute size-56 md:size-72 rounded-full 
        border border-gold-accent/30 
        animate-[spin_12s_linear_infinite]" />

            <div className="absolute size-56 md:size-72 rounded-full 
        bg-[radial-gradient(circle,rgba(244,192,37,0.15),transparent_70%)]" />

            <div className="relative flex size-48 md:size-64 flex-col items-center justify-center 
        rounded-full border border-gold-accent/40 
        bg-linear-to-br from-[#1a0d10] to-[#12080a]
        backdrop-blur-xl 
        shadow-[0_0_60px_-15px_rgba(244,192,37,0.4)]">

                <h1 className="text-white text-center leading-none flex flex-col items-center gap-2">

                    <span className="text-xs tracking-[0.4em] text-slate-400 uppercase">
                        Mesa
                    </span>

                    <span className="text-6xl md:text-7xl font-bold text-gold-accent">
                        {tableNumber}
                    </span>

                </h1>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
        w-12 h-12 rounded-full 
        bg-linear-to-br from-[#1a0d10] to-black
        border border-gold-accent/50
        flex items-center justify-center
        shadow-[0_0_20px_rgba(244,192,37,0.5)]">

                <CheckIcon className="w-6 h-6 text-gold-accent" />
            </div>

        </div>
    )
}