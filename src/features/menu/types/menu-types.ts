export type MenuCategoryKey = "ENTRADAS" | "SUSHI" | "SOPAS" | "PLATOS" | "TEMPURA" | "VEGETARIANO" | "BEBIDAS" | "POSTRES"

export interface MenuItemType {
    id: string
    name: string
    description: string
    price: number
    image: string
    category: MenuCategoryKey
}

export interface MenuCategoryInterface {
  id: string
  name: string
  type: MenuCategoryKey
  items: MenuItemType[];
}