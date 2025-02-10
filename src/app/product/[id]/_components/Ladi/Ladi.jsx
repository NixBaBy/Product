import React from "react";
import * as motion from "motion/react-client";
import { ShoppingCart } from "lucide-react";
import BigSale from "./BigSale";

const Ladi = ({ fetchData }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://w.ladicdn.com/s768x477/6513a52323c204001244ad79/3e271b097c955d6dcdef83b92a1e124f-20241008045232-2c0-i.jpg')",
      }}
      className="bg-cover  h-[477px] w-full flex flex-col items-center scroll-smooth"
    >
      <div className="text-center text-white font-bold text-[14px] ">
        <h3 className="pt-3">Нүдний шил нэг удаагийн арчих цаасан линз</h3>
        <p>
          зөөврийн шил даавуу гар утасны дэлгэцийн <br /> камер тусгай толин
          тусгал алчуур
        </p>
      </div>
      <div className="text-white flex gap-2 justify-center mt-4">
        <div className=" flex gap-1 border-r-[1px] border-solid border-black pr-2">
          <p className="underline">5,0</p>
          <div className="flex">
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
          </div>
        </div>
        <div className="flex gap-1 border-r-[1px] border-solid border-black pr-2">
          <p className="underline">916</p>
          <p>Үнэлгээ хийх</p>
        </div>
        <div className="flex gap-1 ">
          <ShoppingCart />
          <p className="underline">8.2k</p>
        </div>
      </div>
      <BigSale fetchData={fetchData} />
      <motion.div
        className="w-[291px] h-[60px] bg-white shadow-[rgb(0, 0, 0) 0px 15px 20px -15px] flex justify-center items-center mt-5"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <a
          href="#hello"
          className="text-[#731414] text-[18px] font-bold scroll-smooth"
        >
          Одоо худалдаж авах
        </a>
      </motion.div>
    </div>
  );
};

export default Ladi;
