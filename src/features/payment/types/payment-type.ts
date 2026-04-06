export const TIP_OPTIONS = [5, 10, 15, 20, 25];

export type PaymentMethod = "card" | "cash";

export type TipType = "fixed" | "custom";

export interface CheckoutFormValuesInterface {
  paymentMethod: PaymentMethod
  tipType: TipType
  tipValue: number 
  cardHolder?: string
  expiryDate?: string
  cvv?: string
}