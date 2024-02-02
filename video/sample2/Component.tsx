import React from "react";
import { Img, staticFile } from "remotion";
import "./style.css";
export const Component: React.FC<{
  name: string;
  color: string;
  image: string;
}> = ({ name, color, image }) => {
  return (
    <div className="grid grid-rows-3 p-10 bg-[#1da1f2] justify-center w-full h-full">
      <div className="text-6xl text-center  ">Hello!</div>
      <div className="text-8xl text-center  text-orange-600">
        {name || "input text"}
      </div>
      {/* <Img src={staticFile("remotion/hA5jr61EKirh8mLlDgsK/logo.png")} /> */}
      <Img src={image || "https://picsum.photos/600/300"}></Img>
    </div>
  );
};
