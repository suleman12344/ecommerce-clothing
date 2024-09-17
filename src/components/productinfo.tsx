import React from "react";
import { female } from "@/constants/female";
function dataFec(id: string) {
  const data = female.find((items) => {
    return items.ID === id;
  });
  return data;
}
function Productinfo({ id }: { id: string }) {
  console.log(id);
  const female_moreDetail = dataFec(id);
  return (
    <div className="container mx-auto ">
      <div className="md:p-10 flex items-center mt-7">
        <p className="md:text-9xl text-7xl font-bold text-gray-100 ">
          Overview
        </p>
        <p className="text-xl font-bold w-60 absolute">Product Information</p>
      </div>
      <div className="grid md:grid-cols-6 gap-4 md:p-14 mt-7 border-t-2">
        <p className="w-60 font-bold text-gray-600 col-span-2 md:mt-0 mt-5">
          PRODUCT DETAILS
        </p>
        <p className="col-span-4">{female_moreDetail?.productDestail}</p>
        <p className="w-60 font-bold text-gray-600 col-span-2 mt-5">
          PRODUCT CARE
        </p>
        <div className="col-span-4 mt-5 ">
          {female_moreDetail?.productCare?.map((careDetail, index) => (
            <li key={index} className="font-bold">
              {careDetail}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Productinfo;
