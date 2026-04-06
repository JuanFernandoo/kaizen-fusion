import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, type CheckoutFormValues } from "@/features";

export const useCheckoutForm = () => {
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit: SubmitHandler<CheckoutFormValues> = (data) => {
    console.log("CHECKOUT DATA:", data);
  };

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
  };
};