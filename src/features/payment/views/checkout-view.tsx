import { CheckoutForm, useCartStore } from "@/features";

export const CheckoutView = () => {
  const { cart, getTotal } = useCartStore();

  const subtotal = getTotal();

  return (
    <div className="min-h-screen bg-background-dark text-white flex justify-center px-4 py-10">

      <div className="w-full max-w-6xl flex flex-col gap-10">

        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Checkout
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Estás a un paso de completar tu pedido
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2">

            <div className="bg-linear-to-b from-[#1a0d10] to-[#12080a] 
            border border-white/10 
            rounded-2xl p-6 md:p-8
            shadow-[0_20px_50px_rgba(0,0,0,0.6)]">

              <CheckoutForm />

            </div>

          </div>

          <div className="lg:col-span-1">

            <div className="sticky top-6 
            bg-linear-to-b from-[#1a0d10] to-[#12080a]
            border border-white/10 
            rounded-2xl p-6
            shadow-[0_20px_50px_rgba(0,0,0,0.6)]
            flex flex-col gap-5">

              <h2 className="text-lg font-semibold">
                Resumen del pedido
              </h2>

              <div className="flex flex-col gap-3 max-h-64 overflow-y-auto pr-2">

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-sm border-b border-white/5 pb-2"
                  >
                    <div>
                      <p className="font-medium text-white">
                        {item.name}
                      </p>
                      <p className="text-slate-400 text-xs">
                        x{item.quantity}
                      </p>
                    </div>

                    <span className="text-gold-accent font-medium">
                      ${(item.price * item.quantity).toLocaleString("es-CO")}
                    </span>
                  </div>
                ))}

              </div>

              <div className="border-t border-white/10 pt-4 flex flex-col gap-2">

                <div className="flex justify-between text-sm text-slate-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString("es-CO")}</span>
                </div>

                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span className="text-gold-accent text-xl">
                    ${subtotal.toLocaleString("es-CO")}
                  </span>
                </div>

                <p className="text-xs text-slate-500">
                  La propina se calcula en el formulario
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
};