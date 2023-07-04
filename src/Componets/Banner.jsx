import React from "react";
import image from "../assets/Images/banner.jpg";

function Banner() {
  return (
    <div
      className="relative flex items-center justify-center h-96"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#ffc38d] via-[#fea968] to-transparent opacity-80"></div>
      <div className="z-10 text-white p-3">
        <h3 className="text-xl lg:text-2xl ml-2">DEDICATED STUDIO MANAGERS</h3>
        <div className="flex gap-8">
          <div className="text-6xl lg:text-8xl ml-2 font-semibold">02</div>
          <div className="grid">
            <h1 className="text-4xl lg:text-6xl ml-2 mt-3 font-semibold">
              Young Artist Studio Program
            </h1>
            <p className="p-3">
              Exercitation eiusmod minim consectetur laborum esse labore nulla
              anim magna amet.
              <br />
              Exercitation eiusmod minim consectetur laborum esse labore nulla
              anim magna amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
