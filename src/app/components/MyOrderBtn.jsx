"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaUser, FaShoppingCart, FaCog } from "react-icons/fa"; // Importing icons from react-icons

const MyOrderBtn = () => {
  const route = useRouter();
  const [activebtn, setActivebtn] = useState("order");

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/profile") {
      setActivebtn("Profile");
    } else if (path === "/myorder") {
      setActivebtn("order");
    } else if (path === "/settings") {
      setActivebtn("settings");
    }
  }, [route.pathname]);

  const handleclickbtn = (BtnName) => {
    if (BtnName === "Profile") {
      route.push("/profile");
    }
    if (BtnName === "order") {
      route.push("/myorder");
    }
    if (BtnName === "settings") {
      route.push("/settings");
    }
    setActivebtn(BtnName);
  };

  return (
    <div className="flex gap-x-4">
      <button
        className={`flex text-xl items-center px-6 py-2 border text-black rounded-lg ${
          activebtn === "Profile"
            ? "bg-[#F7BC00] text-white"
            : "border-[#F7BC00] hover:bg-[#F7BC00] hover:text-white"
        }`}
        onClick={() => handleclickbtn("Profile")}
      >
        <FaUser className="mr-2" />
        My Profile
      </button>
      <button
        className={`flex text-xl items-center px-6 py-2 border text-black rounded-lg ${
          activebtn === "order"
            ? "bg-[#F7BC00] text-white"
            : "border-[#F7BC00] hover:bg-[#F7BC00] hover:text-white"
        }`}
        onClick={() => handleclickbtn("order")}
      >
        <FaShoppingCart className="mr-2" />
        My Orders
      </button>
      <button
        className={`flex text-xl items-center px-6 py-2 border text-black rounded-lg ${
          activebtn === "settings"
            ? "bg-[#F7BC00] text-white"
            : "border-[#F7BC00] hover:bg-[#F7BC00] hover:text-white"
        }`}
        onClick={() => handleclickbtn("settings")}
      >
        <FaCog className="mr-2" />
        Settings
      </button>
    </div>
  );
};

export default MyOrderBtn;
