import React from "react";
import Image from "next/image";
function footer() {
  return (
    <>
      <div className="container mx-auto grid md:grid-cols-4 grid-flow-row p-20 gap-20">
        <div>
          <Image
            src="/Logo.png"
            alt="Image is not found"
            width="200"
            height="100"
            className="mb-10"
          ></Image>
          <p className="text-gray-500 mb-6">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex gap-3 mt-3">
            <Image
              src="/twitter.png"
              alt="Image is not found"
              width="35"
              height="35"
              className="bg-[#F1F1F1] rounded p-2"
            ></Image>
            <Image
              src="/facebook-app-symbol.png"
              alt="Image is not found"
              width="35"
              height="35"
              className="bg-[#F1F1F1] rounded p-2"
            ></Image>
            <Image
              src="/linkedin.png"
              alt="Image is not found"
              width="35"
              height="35"
              className="bg-[#F1F1F1] rounded p-2"
            ></Image>
          </div>
        </div>
        <div>
          <p className="font-bold text-2xl mb-9">Company</p>
          <div className="text-gray-500">
            <p className="mb-2">About</p>
            <p className="mb-2">Terms of Use</p>
            <p className="mb-2">Privacy Policy</p>
            <p className="mb-2">How it Works</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-2xl mb-9">Support</p>
          <div className="text-gray-500">
            <p className="mb-2">Support Carrer</p>
            <p className="mb-2">24h Service</p>
            <p className="mb-2">Quick Chat</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-2xl mb-9">Contact</p>
          <div className="text-gray-500">
            <p className="mb-2">Whatsapp</p>
            <p className="mb-2">Support 24h</p>
          </div>
        </div>
      </div>

      <div className="border-t-2">
        <div className="container ma-auto flex justify-between p-5 text-gray-500 flex-wrap">
          <p>Copyright © 2024 Dine Market</p>
          <p>
            Design by. <span className="text-black font-bold">Shabrina</span>
          </p>
          <p>
            Code by.
            <span className="text-black font-bold"> Suleman on github</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default footer;
