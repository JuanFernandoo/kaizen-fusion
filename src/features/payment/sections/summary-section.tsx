interface Props {
    subtotal: number;
    tipAmount: number;
    total: number;
}

export const SummarySection = ({ subtotal, tipAmount, total }: Props) => {
    return (
        <div className="space-y-2 text-sm border-t pt-4">
            <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString("es-CO")}</span>
            </div>

            <div className="flex justify-between">
                <span>Propina</span>
                <span>${tipAmount.toLocaleString("es-CO")}</span>
            </div>

            <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toLocaleString("es-CO")}</span>
            </div>
        </div>
    );
};