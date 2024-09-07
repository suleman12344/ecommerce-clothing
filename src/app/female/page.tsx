import React from "react";
import Image from "next/image";
import { female } from "@/constants/female";
import Link from "next/link";

function femaleProduct() {
  return (
    <div className="container mx-auto grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 pt-20">
      {female.map((items) => (
        <Link key={items.ID} href={`/female/${items.ID}`}>
          <Image
            src={`/female/${items.image_path}`}
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

export default femaleProduct;
