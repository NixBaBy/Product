"use client"
import React, { useEffect, useState } from 'react'
import * as motion from "motion/react-client"
import Link from 'next/link';
const MoreLikeThis = () => {
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
    <div className=''>
        <div className='mt-10'>
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
               <p className=" pt-10 ml-10 text-[20px] font-bold text-[#FF0036] ">
                 ✨ ХЯМДРАЛТАЙ БАРААНУУД ✨
               </p>
             </motion.div>
        <div className="w-full ">
      <div className="flex ml-10 mt-10 gap-10 flex-wrap">
        {fetchData?.map((product) => {
          return (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="max-w-[280px] p-4 hover:border-[1px] border-solid border-orange-700 rounded-lg cursor-pointer flex flex-col gap-5 relative ">
              <div className="absolute top-0 right-5 bg-pink-400 rounded-[20px] w-[80px] flex justify-center items-center"><p className="text-white text-[20px]">{product.discounted}</p></div>
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
        </div>
    </div>
  )
}

export default MoreLikeThis