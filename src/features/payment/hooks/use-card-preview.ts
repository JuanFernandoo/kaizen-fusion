import { useState } from "react";
import { detectCardType, formatCardNumber } from "@/lib";

interface Props {
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  cvv?: string;
}

export const useCardPreview = ({
  cardNumber = "",
  cardHolder = "",
  expiryDate = "",
  cvv = "",
}: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const formattedNumber = formatCardNumber(cardNumber);
  const cardType = detectCardType(cardNumber);

  return {
    number: formattedNumber,
    name: cardHolder,
    expiry: expiryDate,
    cvv,
    cardType,
    isFlipped,
    setIsFlipped,
  };
};