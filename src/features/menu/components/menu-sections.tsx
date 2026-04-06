import { MenuItemCard, type MenuCategoryInterface } from "@/features";

interface MenuSectionProps {
    category: MenuCategoryInterface
}

export default function MenuSections({ category }: MenuSectionProps) {
    return (
        <>
            <div className="mb-6 mt-10">

                <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-px bg-gold-accent/40" />

                    <h2 className="text-lg md:text-xl font-semibold tracking-[0.25em] text-gold-accent uppercase">
                        {category.name}
                    </h2>
                </div>

                <div className="h-px w-full bg-linear-to-r from-gold-accent/20 via-white/10 to-transparent" />

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {category.items.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                ))}
            </div>

        </>
    )
}
