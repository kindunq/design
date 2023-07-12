import React from "react";

export default function RsnButton({ text }) {
  return (
    <button className="text-3xl font-bold bg-yellow-200 border-[10px] border-[#f00]">
      {text}
    </button>
  );
}
