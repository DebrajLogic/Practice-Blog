import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full px-4 sm:px-8 py-2 flex items-center justify-center border-t ">
      <p className="text-sm">
        &copy; Copyright {currentYear}. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
