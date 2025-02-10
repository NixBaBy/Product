import React from "react";

const CareInfo = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('https://cbu01.alicdn.com/img/ibank/O1CN0192rDRU1Y3sm9o8Seq_!!2215812213004-0-cib.jpg')",
        }}
        className="w-full h-[875px] bg-cover bg-center relative "
      >
        <div>
          <p className="text-[36px] font-bold text-center text-white pt-[90px] bg-[#6A6E9B]">
            Ашиглах <br /> 4 алхам
          </p>
          <p className="text-[16px] font-bold text-center text-white pt-[40px] pb-[50px] bg-[#6A6E9B]">
            Буруу арчих нь манангийн эсрэг үр нөлөөг бууруулж болзошгүй.
          </p>
        </div>
        <div className="flex flex-col gap-[270px]">
          <div className="flex gap-10 text-white font-bold  bg-[#6A6E9B] mt-[280px]">
            <p className="ml-8">Савлагааг нээж, нойтон салфетка гарга</p>
            <p>
              Нойтон салфеткийг хоёр хувааж, нэг линзийг боож, линзний хоёр
              талыг арчина
            </p>
          </div>
          <div className=" text-white font-bold  bg-[#6A6E9B] flex gap-9 ">
            <p>
              Лензийг арчаад дараа нь нүдний шилний хүрээг нүдний шилний
              алчуураар арчина.
            </p>
            <p>Мөн гар утасны гадаргууг арчиж болно.</p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://cbu01.alicdn.com/img/ibank/O1CN01w1x0Ux1Y3smIsPuot_!!2215812213004-0-cib.jpg')",
        }}
        className="w-full h-[200px] bg-center bg-cover"
      ></div>
    </div>
  );
};

export default CareInfo;
