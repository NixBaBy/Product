"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
      <div>Хямдралтай Бараа</div>
      <div className="flex ml-10 mt-10 gap-10 flex-wrap">
        {fetchData?.map((product) => {
          return (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="max-w-[260px] p-2 hover:border-[1px] border-solid border-orange-700 rounded-lg cursor-pointer flex flex-col gap-5 ">
                <img
                  src={product.img}
                  alt=""
                  className="w-[250px] h-[250px] rounded-lg"
                />
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
