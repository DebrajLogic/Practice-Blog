import React, { useState } from "react";
import Button from "./Button";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="relative flex w-full px-4 sm:px-8 py-2 justify-between items-center shadow-md">
      {/* Header Left */}
      <div className="font-extrabold text-2xl tracking-wider">Blog</div>

      {/* Header Center */}
      <div>
        <ul className="hidden sm:flex gap-4">
          <li>Home</li>
          <li>Add Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* Header Right */}
      <div>
        <Button
          onClick={() => setMobileMenu((prev) => !prev)}
          text={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          }
          className={"block sm:hidden"}
        />
        <Button text="Login" className={"hidden sm:block"} />
      </div>
      {mobileMenu && (
        <div className="absolute top-16 left-0 w-full bg-white h-screen">
          <ul className="space-y-4 text-center">
            <li>Home</li>
            <li>Add Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
