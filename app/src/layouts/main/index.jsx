import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";

export default function MainLayout() {
  return (
    <div className="grid grid-rows-[3rem_1fr_2.5rem] grid-cols-[100%] min-h-screen">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}
