import { Button, Input } from "@/shared";
import { TIP_OPTIONS } from "@/features";

interface TipSelectorProps {
    tipType: "fixed" | "custom";
    tipValue: number;
    setTipType: (type: "fixed" | "custom") => void;
    setTipValue: (value: number) => void;
}

export const TipSelector = ({ tipType, tipValue, setTipType, setTipValue }: TipSelectorProps) => {
    return (
        <div className="flex flex-col gap-5">

            <div>
                <h2 className="text-lg font-semibold">Propina</h2>
                <p className="text-xs text-slate-400 mt-1">
                    Agradece el servicio con una propina opcional
                </p>
            </div>

            <div className="grid grid-cols-5 gap-3">

                {TIP_OPTIONS.map((tip) => {
                    const isActive = tipType === "fixed" && tipValue === tip

                    return (
                        <Button
                            key={tip}
                            type="button"
                            onClick={() => {
                                setTipType("fixed")
                                setTipValue(tip)
                            }}
                            className={`
            py-2 rounded-xl text-sm font-medium
            border transition-all duration-200

            ${isActive
                                    ? "bg-gold-accent text-black border-gold-accent shadow-[0_4px_15px_rgba(244,192,37,0.4)]"
                                    : "border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5"
                                }`}
                        >
                            {tip}%
                        </Button>
                    )
                })}

            </div>

            <div className="flex flex-col gap-3">

                <button
                    type="button"
                    onClick={() => setTipType("custom")}
                    className={`
        text-sm flex items-center gap-2 transition

        ${tipType === "custom"
                            ? "text-gold-accent"
                            : "text-slate-400 hover:text-white"
                        }
      `}
                >
                    <span className="text-xs tracking-widest uppercase">
                        Personalizada
                    </span>
                </button>

                {tipType === "custom" && (
                    <div className="relative">

                        <Input
                            type="number"
                            placeholder="Ej: 10"
                            value={tipValue}
                            onChange={(e) => setTipValue(Number(e.target.value))}
                            className="pr-10"
                        />

                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                            %
                        </span>

                    </div>
                )}

            </div>

        </div>
    );
};