"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion"; // For smooth animations

function banner() {
  return (
    <div className="container mx-auto flex items-center md:p-20 pt-5">
      <motion.div
        className="md:w-[60%] w-80"
        initial={{ opacity: 0, x: -50 }} // Animation from left
        animate={{ opacity: 1, x: 0 }} // End state
        transition={{ duration: 0.8 }} // Animation duration
      >
        <motion.p
          className="text-2xl bg-[#CE7C8C] p-2 w-32 text-white font-semibold rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }} // Delay for smooth entrance
        >
          Sale 70%
        </motion.p>

        <motion.p
          className="mt-10 mb-10 md:text-7xl text-5xl font-bold md:w-[70%] w-80"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          An Industrial Take on Streetwear
        </motion.p>

        <motion.p
          className="text-gray-500 w-[60%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }} // Button hover effect
          className="inline-block"
        >
          <Button className="text-white bg-[#CE7C8C] mt-10 flex items-center gap-2 p-3">
            <Image
              src="/shopping-cart.png"
              alt="Image is not found"
              width={30}
              height={30}
              style={{ filter: "invert(1)" }}
            />
            Start Shopping
          </Button>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 grid-cols-2 md:gap-0 gap-14 pt-10 w-[80%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[
            "/Featured1.png",
            "/Featured2.png",
            "/Featured3.png",
            "/Featured4.png",
          ].map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }} // Image hover effect
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src={src} alt="Featured image" width="100" height="100" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="md:block hidden"
        initial={{ opacity: 0, x: 50 }} // Animation from right
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Image
          src="/bannerPic.avif"
          alt="image is not found"
          width="500"
          height="400"
        />
      </motion.div>
    </div>
  );
}

export default banner;
