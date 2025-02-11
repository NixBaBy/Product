"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";

const Product = () => {
  const [fetchData, setFetchData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:8080/Products");
      const data = await res.json();
      setFetchData(data);
    };
    getData();
  }, []);
  return (
    <div className="w-full h-[84vh] ">
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
        <p className=" pt-10 ml-10 text-[20px] font-bold text-[#FF0036] text-center  w-[323px]">
          ✨ ХЯМДРАЛТАЙ БАРААНУУД ✨
        </p>
      </motion.div>
      <div className="flex ml-10 mt-10 gap-10 flex-wrap">
        {fetchData?.map((product) => {
          return (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="max-w-[280px] p-4 hover:border-[1px] border-solid border-orange-700 rounded-lg cursor-pointer flex flex-col gap-5 relative ">
                <div className="absolute top-2">asd</div>
                <div
                  style={{ backgroundImage: `url(${product.img})` }}
                  className="w-[250px] h-[250px] bg-cover bg-center rounded-lg"
                ></div>
                <p>{product.tittle}</p>
                <p className="text-orange-700 font-bold  underline">
                  {product.price}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
