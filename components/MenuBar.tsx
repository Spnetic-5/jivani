import React from "react";
import Icon from "./Icon";
import { useRouter } from "next/router";

const MenuItem = ({ icon, label, active, path }) => {
  const textColor = active ? "text-white" : "text-gray-300 hover:text-white";
  const router = useRouter();

  const handleItemClick = () => {
    console.log(path);
    router.push(path);
  };

  return (
    <a
      href="#"
      className={`flex items-center ${textColor} p-3 rounded-md transition-all`}
      style={{ fontFamily: "poppins" }}
      onClick={handleItemClick}
    >
      <div className="mr-4 flex">
        <Icon name={icon} color={active ? "#FFFFFF" : "#AAAAAA"} />
      </div>
      {label}
    </a>
  );
};

function MenuBar() {
  const menuItems = [
    { icon: "Home", label: "Home", active: true, path: "/dashboard" },
    { icon: "Wallet2", label: "Expenses", active: false, path: "/expenses" },
    { icon: "Landmark", label: "Investments", active: false, path: "/investments" },
    { icon: "Goal", label: "Goals", active: false, path: "/goals" },
    { icon: "Salad", label: "Meals", active: false, path: "/meals" },
  ];

  return (
    <div
      className="w-1/5 bg-gray-800 text-white p-4 m-8 rounded-2xl"
      style={{
        background: "linear-gradient(to bottom, #202125, #15171A, #1E2125)",
      }}
    >
      <h2 className="text-2xl font-bold text-center m-4" style={{ fontFamily: "comfort" }}>
        Dashboard
      </h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="mb-2">
            <MenuItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuBar;
