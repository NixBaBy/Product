import { BadgeDollarSign } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const NewFace = () => {
  return (
    <div className="mt-5 w-[63%] m-auto flex items-center justify-around">
      <div className="flex">
        <BadgeDollarSign />
        <p>NewFace</p>
      </div>
      <div>
        <div className="flex  items-center">
          <Input placeholder="Бараа хайх" />
          <Button>Хайх</Button>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <img
          src="https://eworld.mn/themes/eworld/images/call.gif"
          alt=""
          className="w-[44px] h-[44px]"
        />
        <div>
          <p>Phone: 77777777</p>
          <p>Да-Бя 10:00-19:00</p>
        </div>
      </div>
    </div>
  );
};

export default NewFace;
