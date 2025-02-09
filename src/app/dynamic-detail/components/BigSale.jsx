import React from "react";
import CountdownTimer from "./LadiClock";
import * as motion from "motion/react-client";

const BigSale = () => {
  return (
    <div className="flex justify-center text-white">
      <div className="w-[400px] h-[223px] border-[1px] border-solid border-[#f1f3f4] bg-[#3883ac] relative">
        <div className="">
          <img
            src="https://w.ladicdn.com/s550x550/6513a52323c204001244ad79/pngtree-flash-sale-50-off-limited-time-offer-tag-elements-png-image_4388343-removebg-preview-20241017041006-djtpz.png"
            alt=""
            className="w-[200px] h-[200px] absolute top-[-75px] left-[-45px]"
          />
          <div className="ml-[140px] mt-[9px] text-[14px] flex flex-col gap-2">
            <p className="font-bold text-center">Урамшуулал дараах өдөрийн дараа дуусна:</p>
            <CountdownTimer />
          </div>
        </div>
        <div className="ml-[10px] flex gap-5">
          <div
            style={{
              backgroundImage:
                "url('https://cbu01.alicdn.com/img/ibank/O1CN01sgLEuG1Y3smJ41GKk_!!2215812213004-0-cib.jpg')",
            }}
            className="w-[133px] h-[133px] rounded-[15px] border-[1px] border-solid border-white bg-cover bg-center "
          ></div>
          <div className="flex flex-col gap-5 py-[10px]">
            <div>
              <p className="line-through text-[14.06px]">
                Эхлэх үнэ: 50,000 MNT
              </p>
              <p className="text-[19px] font-bold">Давуу үнэ: 20,000 MNT</p>
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
                Хязгаарлагдмал санал, супер чанартай <br /> бэлгийг авахын тулд
                яараарай!!!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigSale;
