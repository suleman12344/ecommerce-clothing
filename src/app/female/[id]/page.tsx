import React from "react";
import { female } from "@/constants/female";
import Image from "next/image";
function dataFec(id: string) {
  const data = female.find((items) => {
    return items.ID === id;
  });
  return data;
}
type dataDetailPageProps = {
  params: {
    id: string;
  };
};
function femaleproductdetail({ params }: dataDetailPageProps) {
  //console.log(params);
  const female_detail = dataFec(params.id);
  console.log(female_detail);
  return (
    <div className="container mx-auto grid md:pt-20 pt-16 md:grid-cols-6 grid-cols-4 gap-10 ">
      <Image
        src={`/female/${female_detail?.image_path}`}
        alt="Image is not found"
        width={100}
        height={100}
        className="ml-auto"
      ></Image>
      <div className="flex justify-center items-center col-span-3">
        <Image
          src={`/female/${female_detail?.image_path}`}
          alt="Image is not found"
          width="600"
          height="600"
          className=""
        />
      </div>
      <div className="md:col-span-2 col-span-4 mt-20">
        <p className="text-4xl">{female_detail?.title}</p>
        <p className="font-bold text-gray-400 text-xl mb-14">
          {female_detail?.category}
        </p>
        <p className="font-semibold mb-5">SELECT SIZE</p>
        <div className="flex gap-10 ">
          <button className="rounded-full hover:shadow-lg p-2">XS</button>
          <button className="rounded-full hover:shadow-lg p-2">S</button>
          <button className="rounded-full hover:shadow-lg p-2">M</button>
          <button className="rounded-full hover:shadow-lg p-2">L</button>
          <button className="rounded-full hover:shadow-lg p-2">XL</button>
        </div>
      </div>
    </div>
  );
}

export default femaleproductdetail;
