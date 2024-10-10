// page.tsx
"use client";
import { male } from "@/constants/male";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Productinfo from "@/components/productinfo";
import { useState } from "react";
import { useCart } from "@/components/cartcontext"; // Make sure this has the addToCart implementation

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MaleProduct({ params }: { params: { id: string } }) {
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();

  function incCount() {
    setCount(count + 1);
  }
  const notify = () => {
    toast("Product added to the cart", {
      position: "top-center",
      autoClose: 1000,
    });
  };

  function decCount() {
    if (count > 1) {
      // Ensure count doesn't go below 1
      setCount(count - 1);
    }
  }

  function dataFec(id: string) {
    return male.find((item) => item.ID === id);
  }

  const male_detail = dataFec(params.id);

  return (
    <>
      <div className="container mx-auto grid md:pt-20 pt-16 md:grid-cols-6 grid-cols-4 gap-10">
        <div>
          <Image
            src={`/male/${male_detail?.image_path}`}
            alt="Image not found"
            width={100}
            height={100}
            className="ml-auto"
          />
        </div>

        <div className="flex justify-center items-center col-span-3">
          <Image
            src={`/male/${male_detail?.image_path}`}
            alt="Image not found"
            width="600"
            height="600"
          />
        </div>
        <div className="md:col-span-2 col-span-4 mt-20">
          <p className="text-4xl">{male_detail?.title}</p>
          <p className="font-bold text-gray-400 text-xl mb-14">
            {male_detail?.category}
          </p>
          <p className="font-semibold mb-5">SELECT SIZE</p>
          <div className="flex gap-10 ">
            <button className="rounded-full hover:shadow-lg p-2">XS</button>
            <button className="rounded-full hover:shadow-lg p-2">S</button>
            <button className="rounded-full hover:shadow-lg p-2">M</button>
            <button className="rounded-full hover:shadow-lg p-2">L</button>
            <button className="rounded-full hover:shadow-lg p-2">XL</button>
          </div>
          <div className="flex mt-5 items-center gap-10">
            <p className="font-bold">Quantity</p>
            <button
              className="rounded-full ps-3 pe-3 pb-1 bg-gray-200 text-3xl"
              onClick={decCount}
            >
              -
            </button>
            <p className="font-bold text-xl">{count}</p>
            <button
              className="rounded-full text-3xl border-2 ps-2 pe-2 pb-1"
              onClick={incCount}
            >
              +
            </button>
          </div>
          <div className="mt-5 flex items-center gap-10">
            <Button
              onClick={() => {
                notify();
                addToCart({
                  id: male_detail?.ID || "",
                  title: male_detail?.title || "",
                  price: male_detail?.price || "",
                  count,
                  identity: "male",
                });
              }}
            >
              Add to cart
            </Button>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <p className="font-bold text-2xl">${male_detail?.price}.00</p>
          </div>
        </div>
      </div>
      {male_detail?.ID && <Productinfo id={male_detail.ID} cate={"male"} />}
    </>
  );
}

export default MaleProduct;
