import { TipSelector } from "@/features";

interface Props {
  tipType: "fixed" | "custom";
  tipValue: number;
  setTipType: (type: "fixed" | "custom") => void;
  setTipValue: (value: number) => void;
}

export const TipSection = ({
  tipType,
  tipValue,
  setTipType,
  setTipValue,
}: Props) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Propina voluntaria</h2>

      <TipSelector
        tipType={tipType}
        tipValue={tipValue}
        setTipType={setTipType}
        setTipValue={setTipValue}
      />
    </div>
  );
};