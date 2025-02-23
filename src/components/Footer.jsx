import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-[8vh] bg-white">
      <div className="text-center bg-transparent">
        NewFace ©{new Date().getFullYear()}
      </div>
    </div>
  );
}
