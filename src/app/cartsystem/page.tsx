"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { female } from "@/constants/female";
import { male } from "@/constants/male";
import { useCart } from "@/components/cartcontext";

// Define the data type
type data_type = {
  ID: string;
  image_path: string;
  title: string;
  category: string;
  price: string;
  productDetail: string; // Corrected property name
  productCare: string; // Assuming this is a string
  identity: string;
};

const dataFec = (id: string, identity: string): data_type | undefined => {
  const item =
    identity === "male"
      ? male.find((item) => item.ID === id)
      : female.find((item) => item.ID === id);
  if (item) {
    return {
      ID: item.ID,
      image_path: item.image_path,
      title: item.title,
      category: item.category,
      price: item.price,
      productDetail: item.productDestail, // Corrected property name
      productCare: item.productCare.join(", "), // Ensure this is a string
      identity: item.identity,
    };
  }
  return undefined;
};

function Cartsystem() {
  const { cartItems, cartCount, setCartItems } = useCart();
  const [data, setData] = useState<data_type[]>([]);
  const [counts, setCounts] = useState<number[]>([]);

  useEffect(() => {
    const itemsData = cartItems.map((item) => dataFec(item.id, item.identity));
    setData(itemsData.filter(Boolean) as data_type[]); // Type assertion is safe now
    setCounts(cartItems.map((item) => item.count));
  }, [cartItems]);

  const incCount = (index: number) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);

    const updatedItem = { ...cartItems[index], count: newCounts[index] };

    const updatedCartItems = cartItems.map((item, i) =>
      i === index ? updatedItem : item
    );
    setCartItems(updatedCartItems);
  };

  const decCount = (index: number) => {
    const newCounts = [...counts];
    if (newCounts[index] > 1) {
      newCounts[index] -= 1;
      setCounts(newCounts);

      const updatedItem = { ...cartItems[index], count: newCounts[index] };

      const updatedCartItems = cartItems.map((item, i) =>
        i === index ? updatedItem : item
      );
      setCartItems(updatedCartItems);
    }
  };

  const deletecart = (index: number) => {
    const new_data = [...data];
    new_data.splice(index, 1);
    setData(new_data);

    setCounts((newCounts) => newCounts.filter((_, i) => i !== index));

    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  if (data.length === 0) {
    return (
      <div className="container mx-auto p-10 text-center">
        <h1 className="font-bold text-3xl">Shopping Cart</h1>
        <Image
          src="/shoppingbag.png"
          alt="Empty bag"
          width={150}
          height={150}
          className="mx-auto mt-5"
        />
        <p className="font-bold text-xl mt-4">Your shopping bag is empty</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-20">
      <h1 className="font-bold text-3xl my-6">Shopping Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="col-span-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4"
            >
              <Image
                src={`/${item.identity}/${item.image_path}`}
                alt={item.title}
                width={120}
                height={120}
                className="rounded-lg"
              />
              <div className="flex-1 px-4">
                <p className="font-bold text-lg">{item.title}</p>

                <p className="text-gray-500">{item.category}</p>
                <p className="text-black mt-2">Delivery Estimation</p>
                <p className="text-yellow-500">5 Working days</p>
                <p className="text-xl font-extrabold mt-2">${item.price}.00</p>
              </div>
              <div className="flex flex-col items-center">
                <button
                  className="text-red-500 hover:text-red-700 mb-4"
                  onClick={() => deletecart(index)}
                >
                  <Image
                    src="/delete.png"
                    width={30}
                    height={30}
                    alt="Delete"
                  />
                </button>
                <div className="flex items-center">
                  <button
                    className="rounded-full bg-gray-200 px-4 py-1 text-xl mr-2"
                    onClick={() => decCount(index)}
                  >
                    -
                  </button>
                  <p className="font-bold text-lg">{counts[index]}</p>
                  <button
                    className="rounded-full border-2 px-4 py-1 text-xl ml-2"
                    onClick={() => incCount(index)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="font-bold text-xl mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <p>Quantity</p>
            <p className="font-semibold">{cartCount} Products</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Subtotal</p>
            <p className="font-semibold">
              $
              {data.reduce(
                (sum, item, index) => sum + Number(item.price) * counts[index],
                0
              )}
            </p>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-900 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cartsystem;
