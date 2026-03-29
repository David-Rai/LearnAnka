import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";

const Layout = () => {
  return (
    <main className="w-full h-screen">
      <Header></Header>

      {/* other main content here */}
      <Outlet />
    </main>
  );
};

export default Layout;
