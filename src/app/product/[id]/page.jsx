"use client";
import { ShoppingCart } from "lucide-react";
import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import CountdownTimer from "./_components/LadiClock";

const page = ({ params }) => {
  const [fetchData, setFetchData] = useState();
  useEffect(() => {
    const getData = async () => {
      const { id } = await params;
      const res = await fetch(`http://localhost:8080/Products/${id}`);
      const data = await res.json();
      setFetchData(data);
    };
    getData();
  }, []);

  return (
    <div className="w-[420px] m-auto  relative scroll-smooth">
      <div className="">
        <div
          style={{
            backgroundImage: `url(${fetchData?.img})`,
          }}
          className="bg-cover h-[610px] mt-[-3px]  relative"
        ></div>
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
          <div className="mt-10">
            <div className="flex justify-center text-white">
              <div className="w-[400px] h-[223px] border-[1px] border-solid border-[#f1f3f4] bg-[#3883ac] relative">
                <div className="">
                  <img
                    src="https://w.ladicdn.com/s550x550/6513a52323c204001244ad79/pngtree-flash-sale-50-off-limited-time-offer-tag-elements-png-image_4388343-removebg-preview-20241017041006-djtpz.png"
                    alt=""
                    className="w-[200px] h-[200px] absolute top-[-75px] left-[-45px]"
                  />
                  <div className="ml-[140px] mt-[9px] text-[14px] flex flex-col gap-2">
                    <p className="font-bold text-center">
                      Урамшуулал дараах өдөрийн дараа дуусна:
                    </p>
                    <CountdownTimer />
                  </div>
                </div>
                <div className="ml-[10px] flex gap-5">
                  <div
                    style={{
                      backgroundImage: `url(${fetchData?.img})`,
                    }}
                    className="w-[133px] h-[133px] rounded-[15px] border-[1px] border-solid border-white bg-cover bg-center mt-[-20px]"
                  ></div>
                  <div className="flex flex-col gap-5 py-[10px]">
                    <div>
                      <p className="line-through text-[14.06px]">
                        Эхлэх үнэ: {fetchData?.firstPrice}
                      </p>
                      <p className="text-[19px] font-bold">
                        Давуу үнэ: {fetchData?.secondPrice}
                      </p>
                    </div>
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
                      <p className="text-[11px] font-bold text-[#ffde59] text-center ml-[-18px] w-[243px]">
                        Хязгаарлагдмал санал, супер чанартай <br /> бэлгийг
                        авахын тулд яараарай!!!
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default page;
