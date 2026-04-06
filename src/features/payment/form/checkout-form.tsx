import { useCheckoutForm, useCardPreview, useTip, CardPreview, CustomerFormSection, PaymentSection, TipSection, SummarySection } from "@/features";
import { formatCardNumber, formatCVV, formatExpiryDate, formatTextOnly, useFormValues } from "@/lib";
import { Input, Button } from "@/shared";

export const CheckoutForm = () => {
    const { register, setValue, onSubmit, control, formState: { errors } } = useCheckoutForm();

    const values = useFormValues(control);
    const paymentMethod = values.paymentMethod;
    const tipType = values.tipType;
    const tipValue = values.tipValue;

    const card = useCardPreview({
        cardNumber: values.cardNumber,
        cardHolder: values.cardHolder,
        expiryDate: values.expiryDate,
        cvv: values.cvv,
    })
    const { ref, onChange, ...rest } = register("cardNumber")
    const { ref: expiryRef, onChange: expiryOnChange, ...expiryRest } = register("expiryDate");
    const { ref: cvvRef, onChange: cvvOnChange, ...cvvRest } = register("cvv");
    const cvvLength = card.cardType === "AMEX" ? 4 : 3;
    const { ref: nameRef, onChange: nameOnChange, ...nameRest } = register("cardHolder");

    const { subtotal, tipAmount, total } = useTip(Number(tipValue || 0))
    const setTipType = (type: "fixed" | "custom") => {
        setValue("tipType", type);
    }

    const setTipValue = (value: number) => {
        setValue("tipValue", value);
    }

    return (
        <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-6">

            <CustomerFormSection register={register} errors={errors} />

            <PaymentSection register={register} errors={errors} />

            {paymentMethod === "card" && (
                <div className="space-y-6">
                    <CardPreview {...card} />
                    <Input
                        label="Número de tarjeta"
                        maxLength={19}
                        inputMode="numeric"
                        {...rest}
                        ref={ref}
                        onChange={(e) => {
                            e.target.value = formatCardNumber(e.target.value);
                            onChange(e)
                        }}
                        error={errors.cardNumber?.message}
                    />

                    <Input
                        label="Nombre del titular"
                        maxLength={32}
                        autoComplete="cc-name"
                        {...nameRest}
                        ref={nameRef}
                        onChange={(e) => {
                            e.target.value = formatTextOnly(e.target.value);
                            nameOnChange(e)
                        }}
                        error={errors.cardHolder?.message}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            label="Expiración"
                            placeholder="MM/YY"
                            inputMode="numeric"
                            maxLength={5}
                            {...expiryRest}
                            ref={expiryRef}
                            onChange={(e) => {
                                e.target.value = formatExpiryDate(e.target.value);
                                expiryOnChange(e)
                            }}
                            error={errors.expiryDate?.message}
                        />

                        <Input
                            label="CVV"
                            placeholder={cvvLength === 4 ? "1234" : "123"}
                            inputMode="numeric"
                            maxLength={cvvLength}
                            {...cvvRest}
                            ref={cvvRef}
                            onChange={(e) => {
                                e.target.value = formatCVV(e.target.value, cvvLength);
                                cvvOnChange(e);
                            }}
                            onFocus={() => card.setIsFlipped(true)}
                            onBlur={() => card.setIsFlipped(false)}
                            error={errors.cvv?.message}
                        />
                    </div>
                </div>
            )}

            <TipSection
                tipType={tipType}
                tipValue={tipValue}
                setTipType={setTipType}
                setTipValue={setTipValue}
            />

            <SummarySection
                subtotal={subtotal}
                tipAmount={tipAmount}
                total={total}
            />

            <Button type="submit" className="w-full">
                Confirmar pago
            </Button>
        </form>
    );
};