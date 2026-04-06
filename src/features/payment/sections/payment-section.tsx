import { Select } from "@/shared";
import { PAYMENT_METHOD_OPTIONS } from "@/lib";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { CheckoutFormValues } from "@/features";

interface Props {
  register: UseFormRegister<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
}

export const PaymentSection = ({ register, errors }: Props) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Método de pago</h2>

      <Select
        label="Método de pago"
        options={PAYMENT_METHOD_OPTIONS}
        {...register("paymentMethod")}
        error={errors.paymentMethod?.message}
      />
    </div>
  );
};