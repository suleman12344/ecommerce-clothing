import React from "react";
import Image from "next/image";
import { male } from "@/constants/male";
import Link from "next/link";

function MaleProduct() {
  return (
    <div className="container mx-auto grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 pt-20">
      {male.map((items) => (
        <Link key={items.ID} href={`/male/${items.ID}`}>
          <Image
            src={`/male/${items.image_path}`}
            alt="Image is not found"
            width="300"
            height="300"
          ></Image>
          <p className="font-semibold md:text-xl text-lg">{items.title}</p>
          <p className="text-gray-400">{items.category}</p>
          <p className="font-semibold">${items.price}</p>
        </Link>
      ))}
    </div>
  );
}

export default MaleProduct;
