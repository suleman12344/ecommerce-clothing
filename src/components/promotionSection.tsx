import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
function promotionSection() {
  return (
    <>
      <p className="text-center mt-5 mb-2 text-[#C8707E] font-sans font-semibold">
        PROMOTION
      </p>
      <p className="text-center text-4xl font-semibold md:mb-5 mb-20">
        Our Promotions Events
      </p>
      <div className="container mx-auto grid md:grid-cols-4 grid-rows-1 md:p-20">
        <div className="bg-[#D6D6D8] flex items-center justify-between col-span-2">
          <div className="pl-8">
            <p className="font-semibold md:text-2xl text-xl">
              GET UP TO <span className="font-bold">60%</span>
            </p>
            <p className="w-50">For the summer season</p>
          </div>
          <Image
            src="/event1.png"
            alt="image is not found"
            width="300"
            height="300"
            className="md:w-80 w-52"
          ></Image>
        </div>
        <div className="bg-[#212121] text-white col-span-2 row-start-2 mt-4 md:mb-0 mb-5">
          <div className="md:p-14 p-8 text-center">
            <p className="text-3xl font-bold">GET 30% OFF</p>
            <p>USE PROMO CODE</p>
            <Button variant="secondary">DINEWEEKENDSALE</Button>
          </div>
        </div>
        <div className="bg-[#EFE1C7] row-span-2 md:ml-4 grid grid-row items-end">
          <div className="md:ml-8 md:m-0 m-2">
            <p>Plan Sweatshirt</p>
            <p>
              <span className="line-through">$100.00</span>
              <span className="font-bold">$75.00</span>
            </p>
          </div>

          <Image
            src="/event2.png"
            alt="image is not found"
            width="500"
            height="500"
            className="w-full mt-2 object-cover"
          ></Image>
        </div>
        <div className="bg-[#D7D7D9] row-span-2 ml-4 grid grid-row items-end">
          <div className="md:ml-8 md:m-0 m-2">
            <p>Flex Push Button Bomber</p>
            <p>
              <span className="line-through">$225.00</span>
              <span className="font-bold">$190.00</span>
            </p>
          </div>

          <Image
            src="/event3.png"
            alt="image is not found"
            width="500"
            height="500"
            className="w-full mt-2 object-cover"
          ></Image>
        </div>
      </div>
    </>
  );
}

export default promotionSection;
