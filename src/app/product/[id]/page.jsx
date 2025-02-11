"use client";
import React, { useEffect, useState } from "react";
import Ladi from "./_components/Ladi/Ladi";
import LadiUser from "./_components/LadiUser/LadiUser";
import OrderNow from "./_components/orderNow/OrderNow";
import UserCommends from "./_components/userCommends/UserCommend";
import StickyOff from "./_components/StickyOff";

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
    <div className="w-[420px] m-auto  relative scroll-smooth ">
      <div
        style={{
          backgroundImage: `url(${fetchData?.img})`,
        }}
        className="bg-cover h-[610px] mt-[-3px]  relative"
      ></div>
      <Ladi fetchData={fetchData} />
      <LadiUser fetchData={fetchData} />
      <OrderNow fetchData={fetchData} />
      <UserCommends fetchData={fetchData} />
      <StickyOff />
    </div>
  );
};

export default page;
