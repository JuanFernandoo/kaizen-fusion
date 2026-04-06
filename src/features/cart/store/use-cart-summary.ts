import { useCartStore } from "@/features"

export const useCartSummary = () => {
    const cart = useCartStore((state) => state.cart)

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity, 0
    )

    const totalItems = cart.reduce(
        (acc, item) => acc + item.quantity, 0
    )

    return {
        cart,
        total,
        totalItems,
        hasItems: totalItems > 0,
    }
}