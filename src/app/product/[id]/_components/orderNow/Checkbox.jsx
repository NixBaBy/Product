import React from "react";

const CheckboxGroup = ({
  setSelectedOption,
  error,
  name,
  value,
  fetchData,
}) => {
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="p-2 space-y-2 bg-white w-[377px]  h-[177px] rounded-lg mt-5 flex flex-col justify-center gap-2">
      <div className="flex items-center">
        <input
          type="radio"
          id="option1"
          name={name}
          value="option1"
          checked={value === "option1"}
          onChange={handleRadioChange}
          className="mr-2 h-7 w-7"
        />
        <label htmlFor="option1" className="text-[15px] font-bold">
          {fetchData?.orderPrices1}
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="option2"
          name={name}
          value="option2"
          checked={value === "option2"}
          onChange={handleRadioChange}
          className="mr-2 h-7 w-7"
        />
        <label htmlFor="option2" className="text-[15px] font-bold">
          {fetchData?.orderPrices2}
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="option3"
          name={name}
          value="option3"
          checked={value === "option3"}
          onChange={handleRadioChange}
          className="mr-2 h-7 w-7"
        />
        <label htmlFor="option3" className="text-[15px] font-bold">
          {fetchData?.orderPrices3}
        </label>
      </div>

      {error && <small className="text-[red]">{error}</small>}
    </div>
  );
};

export default CheckboxGroup;
