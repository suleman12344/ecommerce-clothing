import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function email() {
  return (
    <main className="container mx-auto relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center leading-loose">
        <p className="text-4xl font-bold">Subscribe Our Newsletter</p>
        <p className="font-extralight">
          Get the latest information and promo offers directly
        </p>
        <div className="flex justify-center w-96 mx-auto mt-5">
          <Input placeholder="Enter your email" className="mr-2" />
          <Button>Get Started</Button>
        </div>
      </div>
      <div className="p-20 ">
        <p className="text-9xl font-bold text-center text-gray-200">
          Newsletter
        </p>
      </div>
    </main>
  );
}

export default email;
