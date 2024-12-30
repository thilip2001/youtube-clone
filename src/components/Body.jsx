import React from "react";
// import { useAtomValue } from "jotai";
// import { showSidebar } from "./atom/showSidebar";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  //   const toggleSidebar = useAtomValue(showSidebar);
  const isToggleOpen = useSelector((item) => item.app.isMenuOpen);

  return (
    <div className="flex overflow-hidden">
      {isToggleOpen && <Sidebar />}
      <Outlet />
    </div>
  );
};

export default Body;
