import React from "react";

function HeroSection() {
  return (
    <div className=" w-full object-contain overflow-hidden bg-black flex justify-center items-center">
      <img
        className="w-full h-96 opacity-30"
        src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <h1 className="px-36 text-wrap absolute flex justify-center items-center text-white font-medium tracking-tight text-5xl sm:text-7xl">
        Welcome to the Coding Blog
      </h1>
    </div>
  );
}

export default HeroSection;
