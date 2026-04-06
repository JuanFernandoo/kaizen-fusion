import { toast } from "sonner";

export const showSuccessToast = (
  title: string,
  description?: string
) => {
  toast.success(title, {
    description,
    style: {
      background: "#1a1a1a",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.1)",
    },
  });
};

export const showRemoveToast = (
  title: string,
  description?: string
) => {
  toast.error(title, {
    description,
    style: {
      background: "#1a1a1a",
      color: "#fff",
      border: "1px solid rgba(255, 80, 80, 0.3)",
    },
  });
};

export const showDecreaseToast = (
  title: string,
  description?: string
) => {
  toast(title, {
    description,
    style: {
      background: "#1a1a1a",
      color: "#fff",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
  });
};