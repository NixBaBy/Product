import { Menu } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        height: "8vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div className="font-bold text-[#333]">HOME</div>
      <div className="flex gap-1 items-center">
        <img src="/logo.svg" alt="" className="h-[36px] w-[36px]" />
        <div style={{ fontSize: "20px", fontWeight: "bold", color: "#333" }}>
          NEW FACE
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
