import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";

const Layout = () => {
  return (
    <main className="w-full h-dvh overflow-hidden ">
      <Header />

      {/* other main content here */}
      <div className="flex-1 ">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
