import { useCartStore } from "@/features";

export const useTip = (tipValue: number) => {
    const getTotal = useCartStore((state) => state.getTotal);

    const subtotal = getTotal();

    const tipAmount = (subtotal * tipValue) / 100;

    const total = subtotal + tipAmount;

    return {
        subtotal,
        tipAmount,
        total,
    };
};