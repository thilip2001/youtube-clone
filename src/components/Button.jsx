import React from "react";

const Button = ({ label }) => {
  return (
    <div>
      <button className="pl-4 pr-4 pt-1 pb-1  bg-gray-100 rounded-lg hover:bg-gray-200">
        {label}
      </button>
    </div>
  );
};

export default Button;
