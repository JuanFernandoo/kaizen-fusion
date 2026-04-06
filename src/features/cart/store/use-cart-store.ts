import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartStoreType } from "@/features";

export const useCartStore = create<CartStoreType>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item, quantity) =>
        set((state) => {
          const existing = state.cart.find((p) => p.id === item.id);

          if (existing) {
            const newQuantity = existing.quantity + quantity;

            if (newQuantity <= 0) {
              return {
                cart: state.cart.filter((p) => p.id !== item.id),
              };
            }

            return {
              cart: state.cart.map((p) =>
                p.id === item.id
                  ? { ...p, quantity: newQuantity }
                  : p
              ),
            };
          }

          return {
            cart: [
              ...state.cart,
              {
                id: item.id,
                name: item.name,
                price: item.price,
                quantity,
              },
            ],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((p) => p.id !== id),
        })),

      clearCart: () => set({ cart: [] }),

      increaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => {
          const existing = state.cart.find((i) => i.id === id);

          if (!existing) return state;

          if (existing.quantity <= 1) {
            return {
              cart: state.cart.filter((i) => i.id !== id),
            };
          }

          return {
            cart: state.cart.map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          };
        }),

      getTotal: () =>
        get().cart.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0),
    }),
    {
      name: "cart-storage",
    }
  )
);