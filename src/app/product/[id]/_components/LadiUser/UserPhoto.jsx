import React from "react";

const UserPhoto = ({ fetchData }) => {
  return (
    <div
      style={{
        backgroundImage: `url('/userPhoto1.jpg')`,
      }}
      className="w-[419px] h-[552px] mt-[40px] bg-cover bg-center mt-[-20px] relative"
    >
      <div className="text-black absolute top-[110px] mt-[-10px] bg-gray-100 flex flex-col gap-3 text-center">
        <p className="bg-purple-600 text-white text-center rounded-lg ml-10 mt-5 p-[3px] w-[80%]">
          Хэрэглэхийн өмнө хэрэглэх зааврыг анхааралтай уншина уу
        </p>
      </div>
    </div>
  );
};

export default UserPhoto;
