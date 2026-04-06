import type { MenuItemType } from "@/features";

export interface CartItemInterface {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export interface CartStoreType {
    cart: CartItemInterface[];
    addToCart: (item: MenuItemType, quantity: number) => void;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    getTotal: () => number;
}