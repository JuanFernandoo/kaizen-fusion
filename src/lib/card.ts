export const detectCardType = (cardNumber: string) => {
  if (cardNumber.startsWith("4")) return "VISA";
  if (/^5[1-5]/.test(cardNumber)) return "MASTERCARD";
  if (/^3[47]/.test(cardNumber)) return "AMEX";
  return "UNKNOWN"
}

export const formatCardNumber = (value: string) => {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

export const formatExpiryDate = (value: string) => {
  let raw = value.replace(/\D/g, "").slice(0, 4);

  if (raw.length >= 2) {
    let month = parseInt(raw.slice(0, 2), 10);

    if (month === 0) month = 1;
    if (month > 12) month = 12;

    const monthStr = month.toString().padStart(2, "0");
    raw = monthStr + raw.slice(2);
  }

  if (raw.length > 2) {
    return `${raw.slice(0, 2)}/${raw.slice(2)}`;
  }

  return raw
}

export const formatCVV = (value: string, maxLength: number) => {
  return value.replace(/\D/g, "").slice(0, maxLength);
}