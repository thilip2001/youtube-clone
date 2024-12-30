import { Frame, Gamepad, Music, Play } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg flex min-w-60 flex-col gap-4 ">
      <div className="">
        <h1 className="font-bold">Home</h1>
        <ul>
          <li className="flex gap-2 items-center">
            {" "}
            <Music width={16} strokeWidth={3} /> Music
          </li>
          <li className="flex gap-2 items-center">
            {" "}
            <Play width={16} strokeWidth={3} /> Sports
          </li>
          <li className="flex gap-2 items-center">
            {" "}
            <Gamepad width={16} strokeWidth={3} />
            Gaming
          </li>
          <li className="flex gap-2 items-center">
            {" "}
            <Frame width={16} strokeWidth={3} /> Movies
          </li>
        </ul>
      </div>
      <div className="">
        <h1 className="font-bold">Shorts</h1>
        <ul>
          <li className="flex gap-2 items-center">
            {" "}
            <Music width={16} strokeWidth={3} /> Music
          </li>
          <li className="flex gap-2 items-center">
            {" "}
            <Play width={16} strokeWidth={3} /> Sports
          </li>
          <li className="flex gap-2 items-center">
            {" "}
            <Gamepad width={16} strokeWidth={3} />
            Gaming
          </li>
          <li className="flex gap-2 items-center">
            {" "}
            <Frame width={16} strokeWidth={3} /> Movies
          </li>
        </ul>
      </div>
      <div className="">
        <h1 className="font-bold">Subscriptions</h1>
        <ul>
          <li className="flex gap-2 items-center">
            {" "}
            <Music width={16} strokeWidth={3} /> Music
          </li>
          <li className="flex gap-2 items-center">
            {" "}
            <Play width={16} strokeWidth={3} /> Sports
          </li>
          <li className="flex gap-2 items-center">
            {" "}
            <Gamepad width={16} strokeWidth={3} />
            Gaming
          </li>
          <li className="flex gap-2 items-center">
            {" "}
            <Frame width={16} strokeWidth={3} /> Movies
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
