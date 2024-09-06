import React from "react";
import Image from "next/image";

function CartButton() {
  return (
    <div className="">
      <p className="bg-red-600 rounded-full absolute sm:ml-6 md:top-3 pl-2 pr-2 text-white">
        0
      </p>
      <button className="bg-gray-200 rounded-full p-2">
        <Image
          src="/shoppingbag.png"
          alt="image not found"
          width="30"
          height="30"
        />
      </button>
    </div>
  );
}

export default CartButton;
