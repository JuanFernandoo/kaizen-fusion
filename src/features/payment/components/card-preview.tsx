interface CardPreviewProps {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
  cardType: string;
  isFlipped: boolean;
}

export function CardPreview({ number, name, expiry, cvv, cardType,isFlipped,}: CardPreviewProps) {
  return (
<div className="w-full perspective-[1000px]">

  <div
    className={`
      relative w-full h-56
      transform-3d transition-all duration-700
      ease-[cubic-bezier(0.4,0.2,0.2,1)]
      ${isFlipped ? "transform-[rotateY(180deg)]" : ""}
    `}
  >

    <div className="absolute inset-0 rounded-2xl p-5 text-white shadow-2xl
      backface-hidden
      bg-linear-to-br from-[#1a0d10] via-[#2a1418] to-black">

      <div className="absolute inset-0 rounded-2xl 
        bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_40%)]" />

      <div className="relative z-10">

        <div className="flex justify-between items-center">
          <span className="text-xs opacity-70">Credit Card</span>
          <span className="font-semibold">{cardType}</span>
        </div>

        <div className="w-10 h-7 rounded-md bg-linear-to-br from-yellow-200 to-yellow-500 mt-4" />

        <div className="mt-6 text-2xl tracking-[0.25em] font-mono font-semibold">
          {number || "#### #### #### ####"}
        </div>

        <div className="flex justify-between mt-6 text-xs uppercase">

          <div>
            <p className="opacity-60 text-[10px]">Card Holder</p>
            <p className="font-medium tracking-wide">
              {name || "NOMBRE"}
            </p>
          </div>

          <div className="text-right">
            <p className="opacity-60 text-[10px]">Expires</p>
            <p className="font-medium">
              {expiry || "MM/YY"}
            </p>
          </div>

        </div>

      </div>
    </div>

    <div className="absolute inset-0 rounded-2xl p-5 text-white shadow-2xl
      bg-[#0a0a0a]
      transform-[rotateY(180deg)]
      backface-hidden">

      <div className="bg-black h-10 w-full mb-6 rounded" />

      <div className="flex justify-end">
        <div className="bg-white text-black px-3 py-1 w-20 text-right rounded font-mono">
          {cvv || "***"}
        </div>
      </div>

    </div>

  </div>
</div>
  );
}