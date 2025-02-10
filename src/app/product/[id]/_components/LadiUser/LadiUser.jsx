import React from "react";
import UserPhoto from "./UserPhoto";
import MensCream from "./MensCream";
import CareInfo from "./CareInfo";
const LadiUser = ({ fetchData }) => {
  return (
    <div>
      <UserPhoto fetchData={fetchData} />
      <div
        style={{
          backgroundImage:
            "url('https://cbu01.alicdn.com/img/ibank/O1CN01eQjva41Y3smK9LU71_!!2215812213004-0-cib.jpg')",
        }}
        className="w-full h-[700px] bg-cover bg-center  relative"
      >
        <div className="flex flex-col gap-[94px]">
          <p className="text-white font-bold text-[25px] text-center bg-[#5A5D8E] pt-[170px]">
            Та эдгээр асуудлуудтай <br /> тулгарч байна уу?
          </p>
          <p className="bg-[#F3F1F4] ml-1 w-[210px] text-[18px] text-center font-bold">
            Цангийн эсрэг нойтон <br /> салфетка шийдэх болно
          </p>
          <p className="bg-[#F3F1F4] ml-3 w-[170px] text-center font-bold ml-[220px] mt-[50px]">
            Линзний Цангийн эсрэг нойтон салфетка
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://cbu01.alicdn.com/img/ibank/O1CN01ijYK8l1Y3smH2IXTX_!!2215812213004-0-cib.jpg')",
        }}
        className="w-full h-[502px] bg-cover bg-center  relative"
      >
        <div className="pt-[93px] flex flex-col gap-[190px] ">
          <p className="bg-[#F3F1F4] ml-1 w-[200px] text-center font-bol text-[19px] font-bold">
            Харааг тодруулж, ул мөргүй цэвэрлэнэ
          </p>
          <p className="bg-[#F3F1F4] ml-[220px] h-[70px] w-[200px] text-center font-bol text-[19px] font-bold">
            Мотоциклийн каск цэвэрлэнэ
          </p>
        </div>
      </div>
      <MensCream />
      <CareInfo />
      <div
        className="bg-cover bg-center w-full h-[600px]"
        style={{
          backgroundImage:
            "url('https://cbu01.alicdn.com/img/ibank/O1CN01M9Pa2J1Y3smH2J8uc_!!2215812213004-0-cib.jpg')",
        }}
      >
        <div className=" text-black font-bold text-[20px] flex flex-col gap-10 pt-[80px] text-center bg-[#E7E5F7]">
          <p>Гадаа хэрэглэхэд илүү тохиромжтой</p>
          <p className="text-[12px]">
            Авч явахад хялбар, өдөр тутмын аялал, үдэшлэг, спорт, гадаа
            ажиллахад тохиромжтой хамтрагч
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://cbu01.alicdn.com/img/ibank/O1CN011ZQalV1Y3smExVp2f_!!2215812213004-0-cib.jpg')",
        }}
        className="bg-cover bg-center w-full h-[600px]"
      >
        <p className=" text-black font-bold text-[20px] pt-[90px] text-center bg-[#E7E5F7]">
          Хурдан хатаах , усны толбо <br />
          үлдээхгүй, хурууны хээ, толбыг <br />
          амархан арилгана
        </p>
      </div>
    </div>
  );
};

export default LadiUser;
