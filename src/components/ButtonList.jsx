import React from "react";
import Button from "./Button";

const buttonItems = [
  "All",
  "Music",
  "Live",
  "Bigg Boss",
  "News",
  "JavaScript",
  "React",
  "Namaste JS",
  "CSS",
  "Sports",
  "Cinema",
  "Blogs",
  "Stocks ",
];
const ButtonList = () => {
  return (
    <div className="flex m-4 gap-2">
      {buttonItems.map((item) => (
        <Button label={item} key={item} />
      ))}
    </div>
  );
};

export default ButtonList;
