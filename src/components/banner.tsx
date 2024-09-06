import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
function banner() {
  return (
    <div className="container ma-auto flex items-center p-20 ">
      <div className="md:w-[60%] w-96">
        <p className="text-2xl bg-[#CE7C8C] p-2 w-32 text-white font-semibold rounded">
          Sale 70%
        </p>
        <p className="mt-10 mb-10 md:text-7xl text-5xl font-bold md:w-[70%] w-96">
          An Industrial Take on Streetwear
        </p>
        <p className="text-gray-500 w-[60%]">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="text-white bg-[#CE7C8C] mt-10">
          <Image
            src="/shopping-cart.png"
            alt="Image is not found"
            width={30}
            height={30}
            style={{ filter: "invert(1)" }}
          ></Image>
          Start Shopping
        </Button>
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-0 gap-14 pt-10 w-[80%]">
          <Image
            src="/Featured1.png"
            alt="image is not found"
            width="100"
            height="100"
          ></Image>
          <Image
            src="/Featured2.png"
            alt="image is not found"
            width="100"
            height="100"
          ></Image>
          <Image
            src="/Featured3.png"
            alt="image is not found"
            width="100"
            height="100"
          ></Image>
          <Image
            src="/Featured4.png"
            alt="image is not found"
            width="100"
            height="100"
          ></Image>
        </div>
      </div>
      <div className="md:block hidden">
        <Image
          src="/bannerPic.avif"
          alt="image is not found"
          width="500"
          height="400"
        ></Image>
      </div>
    </div>
  );
}

export default banner;
