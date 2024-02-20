import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";

export default function framer() {
  return (
    <div className="bg-neutral-600 w-screen h-screen flex justify-center items-center">
      <Routes>
        <Route index element={<Menu />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
