import { Input, Select } from "@/shared";
import { DOCUMENT_TYPE_OPTIONS } from "@/lib";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { CheckoutFormValues } from "@/features";


interface Props {
  register: UseFormRegister<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
}

export const CustomerFormSection = ({ register, errors }: Props) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Información del cliente</h2>

      <Input
        label="Nombre completo"
        {...register("customerName")}
        error={errors.customerName?.message}
      />

      <Select
        label="Tipo de documento"
        options={DOCUMENT_TYPE_OPTIONS}
        {...register("documentType")}
        error={errors.documentType?.message}
      />

      <Input
        label="Número de documento"
        {...register("documentNumber")}
        error={errors.documentNumber?.message}
      />

      <Input
        label="Correo electrónico"
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />
    </div>
  );
};