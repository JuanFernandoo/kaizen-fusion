import { useCartSummary } from "@/features";
import { FloatingCart } from "@/shared";
import { useNavigate } from "@tanstack/react-router";

export function CartSummaryView() {
  const { total, hasItems } = useCartSummary();
  const navigate = useNavigate();

  if (!hasItems) return null;

  return (
    <FloatingCart
      total={total}
      onClick={() => navigate({ to: "/cart" })}
    />
  );
}