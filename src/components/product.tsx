import React from "react";
import { female } from "@/constants/female";
import Link from "next/link";
import Image from "next/image";
function product() {
  console.log(female);
  return (
    <>
      <p className="text-center md:mt-5 mt-10 mb-2 text-[#C8707E] font-sans font-semibold">
        PRODUCTS
      </p>
      <p className="text-center md:text-4xl text-2xl font-semibold md:mb-5 mb-10">
        Check What We have
      </p>
      <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-14 md:p-20">
        {female
          .filter((items) => items.ID <= "3") // Filter items where ID is less than or equal to 3
          .map((items) => (
            <Link href="/" key={items.ID} className="scale-95 hover:scale-100 ">
              <Image
                src={`/female/${items.image_path}`}
                alt="Image not found"
                width="500"
                height="500"
              ></Image>
              <p className="text-xl font-bold mt-2">{items.title}</p>
              <p className="font-bold text-lg">${items.price}</p>
            </Link>
          ))}
      </div>
    </>
  );
}

export default product;
