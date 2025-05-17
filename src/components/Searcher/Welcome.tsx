import React from "react";

export default function Welcome() {
  return (
    <div className="self-center flex flex-col items-center justify-center gap-2">
      <div className="w-16 aspect-square grid rounded-full overflow-hidden">
        <img src="/bg-dark.jpg" className="w-full h-full object-cover" alt="" />
      </div>
      <h2 className="text-2xl">Good morning, {"Dean"}!</h2>
    </div>
  );
}
