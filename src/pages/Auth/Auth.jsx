import React, { useState } from "react";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";

const AuthTabs = () => {
  const [toggleTab, setToggleTab] = useState("login");

  const handleTabChange = (tab) => {
    setToggleTab(tab);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-[400px]">
        <div className="flex justify-around mb-6 border-b border-gray-300">
          <button
            className="px-4 py-2 font-bold"
            onClick={() => handleTabChange("login")}
          >
            Login
          </button>
          <button
            className="px-4 py-2 font-bold"
            onClick={() => handleTabChange("register")}
          >
            Register
          </button>
        </div>

        {/* Tab Content */}
        <div>
            {toggleTab==="login" ? <Login/> : <Register/>}
        </div>
      </div>
    </div>
  );
};

export default AuthTabs;
