import { z } from "zod";

export const checkoutSchema = z
  .object({
    customerName: z.string().min(3, "Nombre requerido"),
    documentType: z.string().min(1, "Selecciona un tipo de documento"),
    documentNumber: z.string().min(5, "Documento inválido"),
    email: z.string().email("Email inválido"),
    paymentMethod: z.enum(["card", "cash"]),
    tipType: z.enum(["fixed", "custom"]),
    tipValue: z
      .number()
      .min(0, "El tip no puede ser negativo"),
    cardNumber: z.string().optional(),
    cardHolder: z.string().optional(),
    expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Fecha inválida").optional(),
    cvv: z.string().min(3, "CVV inválido").max(4, "CVV inválido").optional(),
  })
  .superRefine((data, ctx) => {
    if (data.paymentMethod === "card") {
      if (!data.cardNumber || data.cardNumber.length < 16) {
        ctx.addIssue({
          path: ["cardNumber"],
          code: z.ZodIssueCode.custom,
          message: "Número de tarjeta inválido",
        });
      }

      if (!data.cardHolder) {
        ctx.addIssue({
          path: ["cardHolder"],
          code: z.ZodIssueCode.custom,
          message: "El nombre es requerido",
        });
      }

      if (!data.expiryDate) {
        ctx.addIssue({
          path: ["expiryDate"],
          code: z.ZodIssueCode.custom,
          message: "Fecha inválida",
        });
      }

      if (!data.cvv || data.cvv.length < 3) {
        ctx.addIssue({
          path: ["cvv"],
          code: z.ZodIssueCode.custom,
          message: "CVV inválido",
        });
      }
    }
  });

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;