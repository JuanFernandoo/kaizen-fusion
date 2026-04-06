import { useMenu } from "@/features"

export const useMenuItem = (id: string) => {
    const {categories, isLoading} = useMenu()

    const item = categories.flatMap((cat) => cat.items).find((item) => item.id === id)

    return{
        item,
        isLoading
    }
}