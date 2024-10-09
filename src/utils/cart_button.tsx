// cartbutton.tsx
"use client";
import Image from "next/image";
import { useCart } from "@/components/cartcontext";
import Link from "next/link";

function CartButton() {
  const { cartCount } = useCart();

  return (
    <div>
      <p className="bg-red-600 rounded-full absolute sm:ml-6 md:top-3 pl-2 pr-2 text-white">
        {cartCount}
      </p>
      <Link href="/cartsystem">
        <button className="bg-gray-200 rounded-full p-2">
          <Image
            src="/shoppingbag.png"
            alt="image not found"
            width="30"
            height="30"
          />
        </button>
      </Link>
    </div>
  );
}

export default CartButton;
