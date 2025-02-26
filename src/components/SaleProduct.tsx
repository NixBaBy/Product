"use client";
import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import Link from "next/link";

type Product = {
  img: string;
  tittle: string;
  price: string;
  discounted: string;
  id: string;
};
const SaleProduct = () => {
  const [fetchData, setFetchData] = useState<Product[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:8080/Products");
      const data = await res.json();
      setFetchData(data);
    };
    getData();
  }, []);
  return (
    <div>
      <div className="w-[63%] m-auto">
        <motion.div
          animate={{ opacity: [0, 0.7, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
            ease: "easeInOut",
          }}
        >
          <p className=" pt-10 ml-10 text-[20px] font-bold text-[#FF0036] text-center  w-[335px]">
            ✨ ХЯМДРАЛТАЙ БАРААНУУД ✨
          </p>
        </motion.div>
        <div className="flex ml-10 mt-10 gap-10 flex-wrap">
          {fetchData?.map((product) => {
            return (
              <Link href={`/product/${product.id}`} key={product.id}>
                <div className="max-w-[280px] p-4  cursor-pointer flex flex-col gap-5 relative group  hover:shadow-lg transition-shadow duration-500 rounded-lg">
                  <div className="absolute top-0 right-5 bg-pink-400 rounded-[20px] w-[80px] flex justify-center items-center">
                    <p className="text-white text-[20px]">
                      {product.discounted}
                    </p>
                  </div>
                  <div
                    style={{ backgroundImage: `url(${product.img})` }}
                    className="w-[250px] h-[250px] bg-cover bg-center rounded-lg"
                  ></div>
                  <div className="rounded-lg bg-orange-600 w-[60%] text-center text-white font-bold absolute bottom-[200px] left-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Барааг Үзэх
                  </div>
                  <p>
                    {product.tittle.length > 20
                      ? product.tittle.slice(0, 160) + "..."
                      : product.tittle}
                  </p>
                  <p className="text-orange-700 font-bold  underline">
                    {product.price}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SaleProduct;
