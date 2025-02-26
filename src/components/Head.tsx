import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const Head = () => {
  return (
    <div className="w-full h-[50px] border-b-[1px] border-solid border-gray-200 flex items-center justify-around  bg-[#f4f4f5] text-gray-600 text-[15px] transition-all duration-300">
      <div className="flex gap-5 items-center ">
        <Link href="/">
          <p className="hover:bg-white p-[14px] transition-all duration-300 cursor-pointer">
            Нүүр
          </p>
        </Link>
        <p className="hover:bg-white p-[14px] transition-all duration-300 cursor-pointer">
          Хэрхэн Захиалах вэ?
        </p>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-1 hover:bg-white p-[14px] transition-all duration-300 cursor-pointer">
          <ShoppingCart /> Миний хүргэлт
        </div>
        <div className="flex items-center gap-1 hover:bg-white p-[14px] transition-all duration-300 cursor-pointer">
          <User />
          <p>Нэвтрэх</p>
        </div>
      </div>
    </div>
  );
};

export default Head;
