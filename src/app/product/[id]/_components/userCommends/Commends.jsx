import React from "react";

const Commends = ({ fetchData }) => {
  return (
    <div>
      {fetchData?.userCommends?.map((commend) => {
        return (
          <div className="flex gap-3 mt-5" key={commend.id || uuidv4()}>
            <div>
              <img
                src={commend.img1}
                alt=""
                className="w-[69px] h-[60px] rounded-[50%]"
              />
              <p className="text-[16px] font-bold text-[#4E4D4D]">
                {commend.name}
              </p>
              <p className="text-[13px] text-[#636363]">{commend.day}</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <img
                  src="https://w.ladicdn.com/s400x350/5c7362c6c417ab07e5196b05/sao-star-20231010094822-vteoa.png"
                  alt=""
                  className="w-[87px] h-[17px]"
                />
                <p className="text-[16px] text-[#000000]">
                  Маш сайн бүтээгдэхүүн
                </p>
              </div>
              <div className="flex items-center">
                <img src="/verify.svg" alt="" className="w-[17px] h-[17px]" />
                <p className="text-[#01C31A] text-[13px]">
                  Худалдан авалтын гэрчилгээ
                </p>
              </div>
              <p className="text-[15px] text-[#414141]">{commend.commend}</p>
              <div className="flex gap-1">
                <img
                  src={commend.img2}
                  alt=""
                  className="w-[151px] h-[201px]"
                />
                <img
                  src={commend.img3}
                  alt=""
                  className="w-[151px] h-[201px]"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Commends;
