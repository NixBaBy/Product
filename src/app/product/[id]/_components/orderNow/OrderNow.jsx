"use client";
import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";

import OrderInput from "./OrderInput";
import CheckboxGroup from "./Checkbox";

import emailjs from "@emailjs/browser";
import BigSale from "../Ladi/BigSale";
import RamainingProducts from "./RemainingProduct";

const OrderNow = ({ fetchData }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [formValue, setFormValue] = useState({
    Name: "",
    Phone: "",
    Addres: "",
    Checkbox: "",
  });
  const [formError, setFormError] = useState({
    Name: "",
    Phone: "",
    Addres: "",
    Checkbox: "",
  });

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormError((prev) => ({ ...prev, [name]: "" }));
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (formValue) => {
    emailjs
      .send(
        "service_3h92yrr",
        "template_a5l5sdf",
        { ...formValue, email: "zulsar2024@gmail.com" },
        { publicKey: "M4Lbb7HyMtlTMYrKi" }
      )
      .then(
        () => {
          alert("Амжилттай илгээгдлээ!");
        },
        () => {
          alert("Алдаа гарлаа. Дахин оролдоно уу.");
        }
      );
  };

  useEffect(() => {
    if (selectedOption) {
      setFormError((prev) => ({
        ...prev,
        Checkbox: "",
      }));
    }
  }, [selectedOption]);

  const clickHandler = () => {
    let errorHave = false;
    const { Name, Phone, Addres } = formValue;
    // Name шалгах
    if (!Name.trim()) {
      setFormError((prev) => ({
        ...prev,
        Name: "Enter your name",
      }));
      errorHave = true;
    }

    // Phone шалгах
    if (!Phone.trim()) {
      setFormError((prev) => ({
        ...prev,
        Phone: "Enter your phone",
      }));
      errorHave = true;
    }

    // Addres шалгах
    if (!Addres.trim()) {
      setFormError((prev) => ({
        ...prev,
        Addres: "Enter your address",
      }));
      errorHave = true;
    }

    // Checkbox сонголт шалгах
    if (!selectedOption) {
      setFormError((prev) => ({
        ...prev,
        Checkbox: "Please select an option",
      }));
      errorHave = true;
    }

    // Алдаа байхгүй бол formValue-ийг илгээх
    if (!errorHave) {
      const updatedFormValue = {
        ...formValue,
        Checkbox: selectedOption, // Checkbox-ын утгыг formValue-д нэмэх
      };
      sendEmail(updatedFormValue); // Имэйлд илгээх
      // Input болон checkbox утгыг хоослох
      setFormValue({ Name: "", Phone: "", Addres: "", Checkbox: "" });
      setSelectedOption("");
      alert("Таны захиалга амжилттай хийгдлээ");
    }
  };

  return (
    <div
      id="hello"
      style={{
        backgroundImage:
          "url('https://w.ladicdn.com/s768x871/6513a52323c204001244ad79/3e271b097c955d6dcdef83b92a1e124f-20241008045232-2c0-i.jpg')",
      }}
      className="w-full h-[907px] flex flex-col items-center mb-5 scroll-smooth"
    >
      <div className="pt-6">
        <BigSale fetchData={fetchData} />
      </div>
      <div>
        <h3 className="text-[24px] font-bold uppercase text-center text-white mt-5">
          ЗАХИАЛГЫН МЭДЭЭЛЭЛ
        </h3>
        <div className="flex flex-col gap-5 mt-2">
          <OrderInput
            placeholder="ХҮЛЭЭН АВАГЧИЙН НЭР"
            name={"Name"}
            handlerChange={handlerChange}
            value={formValue.Name}
            error={formError.Name}
          />
          <OrderInput
            placeholder="УТАСНЫ ДУГААР"
            name={"Phone"}
            handlerChange={handlerChange}
            value={formValue.Phone}
            error={formError.Phone}
          />
          <OrderInput
            placeholder="ХҮРГЭЛТИЙН ХАЯГ"
            name={"Addres"}
            handlerChange={handlerChange}
            value={formValue.Addres}
            error={formError.Addres}
          />
        </div>
      </div>
      <div>
        <CheckboxGroup
          setSelectedOption={setSelectedOption}
          error={formError.Checkbox}
          name={"Checkbox"}
          value={selectedOption}
          fetchData={fetchData}
        />
      </div>

      <motion.button
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        onClick={clickHandler}
        className="text-[30px] font-bold text-white bg-red-600 rounded-lg p-[5px] mt-5"
      >
        Одоо худалдаж авах
      </motion.button>

      <div className="w-[400px] bg-orange-500 border-[2px] border-solid border-white rounded-[14px] flex gap-2 items-center justify-center mt-5">
        <img src="/baraa.svg" alt="" className="w-[25px] h-[25px]" />
        <div className="flex items-center">
          <p>Зөвхөн</p>
          <RamainingProducts />
          <p>бүтээгдэхүүн үлдсэн</p>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
