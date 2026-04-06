import { useState } from "react";
import {
  CartSummaryView,
  CategoryTabs,
  MenuSections,
  useMenu,
} from "@/features";
import type { MenuCategoryKey } from "@/features";

export function MenuView() {
  const { categories, isLoading } = useMenu();
  const [activeCategory, setActiveCategory] =
    useState<MenuCategoryKey>("ENTRADAS");

  if (isLoading) {
    return <p className="text-white">Cargando menú...</p>;
  }

  return (
    <div className="min-h-screen bg-background-dark text-white px-4 py-6">

      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onChange={(cat) => {
          setActiveCategory(cat);

          document.getElementById(cat)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
      />

      <div className="mt-6 flex flex-col gap-12">
        {categories.map((category) => (
          <div key={category.id} id={category.type}>
            <MenuSections category={category} />
          </div>
        ))}
      </div>

      <CartSummaryView />
    </div>
  );
}