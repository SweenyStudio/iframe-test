import { useState } from "react";

interface ProductOptionsProps {
  sizing: {
    name: string;
    dimensions: string;
    variantId: string;
  }[];
}

export default function ProductOptions({
  sizing
}: ProductOptionsProps) {

  const [selectedVariant, setSelectedVariant] = useState({
    variantId: sizing[0].variantId,
  });

  return (
<form className="mt-5">
  <p className="text-xl font-black text-neutral-900">Size</p>
  <div>
    <div className="grid mt-5 w-full lg:grid-cols-2 gap-3">
      {
        sizing.map((size, index) => (
          <a
            
            id={size.variantId}
            className={`flex flex-col items-center w-full rounded-xl py-2 lg:py-3 text-lg cursor-pointer font-bold text-neutral-900 duration-200 ring-0 bg-neutral-100 border border-neutral-300  ${selectedVariant.variantId === size.variantId ? 'ring-lime-500 ring-2 bg-gradient-to-tr from-lime-100 to-green-100' : ' hover:ring-1 hover:ring-neutral-400'}`}
            onClick={() => setSelectedVariant({ variantId: size.variantId })}
          >
            {size.name}
            <br />
            <span className="text-sm text-neutral-600">{size.dimensions}</span>
          </a>
        ))
      }
    </div>
  </div>
  <div className="mt-6 flex flex-col items-center">
    <a
      href={`https://24-7.golf/cart/${selectedVariant.variantId}:1`}
      className="w-full items-center flex justify-center rounded-full border border-transparent bg-neutral-950 px-8 py-4 text-base font-bold text-white hover:bg-neutral-800 focus:outline-none"
    >
      ADD TO CART
    </a>
    <p className="text-sm underline mt-2">
      {" "}
      Free Shipping | Finance Options Available
    </p>
  </div>
</form>

  )
}
