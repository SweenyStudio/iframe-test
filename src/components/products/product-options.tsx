import { useState } from "react";

interface ProductOptionsProps {
  sizing: {
    name: string;
    dimensions: string;
    variantId: string;
  }[];
}

export default function ProductOptions({ sizing }: ProductOptionsProps) {
  const [selectedVariant, setSelectedVariant] = useState({
    variantId: sizing[0].variantId,
  });

  return (
    <form className="mt-5">
      <p className="text-xl font-black text-neutral-900">Size</p>
      <div>
        <div className="mt-5 grid w-full gap-3 lg:grid-cols-2">
          {sizing.map((size, index) => (
            <a
              key={index}
              id={size.variantId}
              className={`flex w-full cursor-pointer flex-col items-center rounded-xl border border-neutral-300 bg-neutral-100 py-2 text-lg font-bold text-neutral-900 ring-0 duration-200 lg:py-3  ${selectedVariant.variantId === size.variantId ? "bg-gradient-to-tr from-lime-100 to-green-100 ring-2 ring-lime-500" : " hover:ring-1 hover:ring-neutral-400"}`}
              onClick={() => setSelectedVariant({ variantId: size.variantId })}
            >
              {size.name}
              <br />
              <span className="text-sm text-neutral-600">
                {size.dimensions}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center">
        <a
          href={`https://24-7.golf/cart/${selectedVariant.variantId}:1`}
          target="_top"
          className="flex w-full items-center justify-center rounded-full border border-transparent bg-neutral-950 px-8 py-4 text-base font-bold text-white hover:bg-neutral-800 focus:outline-none"
        >
          ADD TO CART
        </a>
        <p className="mt-2 text-sm underline">
          {" "}
          Free Shipping | Finance Options Available
        </p>
      </div>
    </form>
  );
}
