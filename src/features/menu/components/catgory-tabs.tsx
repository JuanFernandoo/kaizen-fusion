import { Button } from "@/shared"
import type { MenuCategoryInterface, MenuCategoryKey } from "@/features"

interface CategoryTabsProps {
  categories: MenuCategoryInterface[]
  activeCategory: MenuCategoryKey
  onChange: (category: MenuCategoryKey) => void
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onChange,
}: CategoryTabsProps) {
  return (
    <div className="relative w-full overflow-x-auto pb-3">

      <div className="flex gap-3 px-1">
        {categories.map((cat) => {
          const isActive = cat.type === activeCategory

          return (
            <Button
              key={cat.id}
              onClick={() => onChange(cat.type)}
              className={`
                relative px-5 py-2 rounded-full text-sm whitespace-nowrap
                transition-all duration-200 border

                ${isActive
                  ? "bg-gold-accent text-black border-gold-accent shadow-[0_4px_15px_rgba(244,192,37,0.4)]"
                  : "border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5"
                }
              `}
            >
              {cat.name}

              {isActive && (
                <span className="absolute inset-0 rounded-full bg-gold-accent/20 blur-md -z-10" />
              )}
            </Button>
          )
        })}
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-linear-to-r from-background-dark to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-linear-to-l from-background-dark to-transparent" />

    </div>
  )
}