import React from "react";
import Button from "./Button";

function BlogCard() {
  return (
    <div className="hover:scale-105 cursor-pointer bg-white p-2 sm:p-4 border border-pink-900 rounded flex flex-col transition ease-in-out">
      <div className="object-contain overflow-hidden">
        <img
          src="https://images.pexels.com/photos/34140/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
      <h2 className="font-semibold my-2 tracking-wide text-lg line-clamp-1 text-ellipsis">
        How to choose the right hotel
      </h2>
      <small className="font-light text-sm">6 March 2024</small>
      <p className="text-gray-700 text-sm my-2 line-clamp-3 text-ellipsis">
        So you&apos;re going abroad, you&apos;ve chosen your destination and now
        you have to choose a hotel. Ten years ago, you&apos;d have probably
        visited your local travel agent and trusted the face
      </p>
      <Button
        text="Read More"
        className={
          "my-2 hover:bg-white hover:text-pink-900 text-white bg-pink-900"
        }
      />
    </div>
  );
}

export default BlogCard;
