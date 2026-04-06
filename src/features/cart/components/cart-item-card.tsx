import { useCartStore, type CartItemInterface } from "@/features"
import { showDecreaseToast, showRemoveToast, showSuccessToast } from "@/lib"
import { Button } from "@/shared"
import { Minus, Plus, Trash } from "lucide-react"

interface CardItemCardProps {
  item: CartItemInterface
}

export default function CartItemCard({ item }: CardItemCardProps) {
  const removeFromCart = useCartStore((s) => s.removeFromCart)
  const increaseQuantity = useCartStore((s) => s.increaseQuantity)
  const decreaseQuantity = useCartStore((s) => s.decreaseQuantity)

  return (
<div className="flex items-center gap-4 p-4 rounded-2xl 
  bg-linear-to-b from-[#1a0d10] to-[#12080a]
  border border-white/10 
  shadow-[0_10px_30px_rgba(0,0,0,0.6)]">

  {/* INFO */}
  <div className="flex-1 flex flex-col gap-1">

    <h3 className="text-white font-semibold leading-tight">
      {item.name}
    </h3>

    <span className="text-sm text-slate-400">
      ${item.price.toLocaleString("es-CO")} c/u
    </span>

    {/* SUBTOTAL */}
    <span className="text-sm text-gold-accent font-medium mt-1">
      ${(item.price * item.quantity).toLocaleString("es-CO")}
    </span>

  </div>

  {/* CONTROLS */}
  <div className="flex items-center gap-3">

    <button
      onClick={(e) => {
        e.stopPropagation()
        decreaseQuantity(item.id)
        showDecreaseToast("Cantidad reducida", item.name)
      }}
      className="size-9 rounded-full 
      bg-white/5 border border-white/10 
      flex items-center justify-center
      hover:bg-white/10 transition"
    >
      <Minus size={16} />
    </button>

    <span className="w-6 text-center font-semibold">
      {item.quantity}
    </span>

    <button
      onClick={(e) => {
        e.stopPropagation()
        increaseQuantity(item.id)
        showSuccessToast("Agregado al pedido", item.name)
      }}
      className="size-9 rounded-full 
      bg-primary 
      flex items-center justify-center
      shadow-[0_4px_15px_rgba(193,11,45,0.5)]
      hover:scale-110 transition"
    >
      <Plus size={16} />
    </button>

  </div>

  <Button
    onClick={(e) => {
      e.stopPropagation()
      removeFromCart(item.id)
      showRemoveToast("Producto eliminado", item.name)
    }}
    className="ml-2 size-9 rounded-full 
    bg-red-500/10 border border-red-500/20
    flex items-center justify-center
    hover:bg-red-500/20 transition"
  >
    <Trash size={16} className="text-red-400" />
  </Button>

</div>
  )
}