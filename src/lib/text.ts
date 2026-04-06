export const formatTextOnly = (value: string) => {
  return value
    .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "")
    .replace(/\s+/g, " ")
    .trimStart();
};