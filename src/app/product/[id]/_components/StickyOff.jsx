import React from "react";
import * as motion from "motion/react-client";

const StickyOff = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://w.ladicdn.com/s768x82/6513a52323c204001244ad79/a2a24ed71e0a87c654a50f1e31c5551a-20241003011111-ksqja.jpg')",
      }}
      className="w-full h-[82px] text-white flex justify-center items-center gap-2 sticky bottom-0"
    >
      <motion.div
        animate={{ opacity: [0, 0.7, 1] }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.1,
          ease: "easeInOut",
        }}
      >
        <img
          src="https://w.ladicdn.com/s400x400/614d4f7443928c0014d91fd8/khuyen-mai-20221006015742-kbsym-20230205165935-5md41-20240103094521-rn0wh.png"
          alt=""
          className="w-[62px] h-[62px]"
        />
      </motion.div>

      <div className="flex flex-col gap-2">
        <p className="text-[15px] font-bold">
          50% хөнгөлөлтийн кодыг яг одоо аваарай
        </p>
        <div className="flex gap-2">
          <p className="text-[13px] font-bold">зөвхөн өнөөдрийн хувьд</p>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.1, 0.1, 0.1, 0.1],
              repeat: Infinity,
              repeatDelay: 0.2,
            }}
          >
            <a
              href="#hello"
              className="w-[158px] text-[13px] font-bold text-center bg-red-600 p-[5px] rounded-lg"
            >
              Одоо худалдаж авах
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StickyOff;
