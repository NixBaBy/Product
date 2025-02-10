import React from "react";

const OrderInput = ({ placeholder, name, handlerChange, value, error }) => {
  return (
    <div className="flex flex-col">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="rounded-[13px] w-[375px] h-[52px] bg-white placeholder:text-black px-5 placeholder:text-[13px]"
        onChange={handlerChange}
        value={value}
      />
      <small className="text-[red]">{error}</small>
    </div>
  );
};

export default OrderInput;
