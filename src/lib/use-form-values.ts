import { useWatch, type Control, type FieldValues } from "react-hook-form";

export const useFormValues = <T extends FieldValues>(control: Control<T>) => {
  return useWatch({ control }) as T;
};