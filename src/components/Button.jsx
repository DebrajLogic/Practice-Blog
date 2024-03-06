import React from "react";

function Button({ text, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${className} px-4 py-2 rounded border border-pink-900 hover:bg-pink-900 hover:text-white transition ease-in-out`}
    >
      {text}
    </button>
  );
}

export default Button;
