import React from "react";
import Home from "./Home";
import "../App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Blog from "./Blog";
import { wait } from "@testing-library/user-event/dist/utils";
export default function App() {
  const location = useLocation();
  return (
    <>
      <div className="w-screen h-screen bg-blue-950 flex flex-col justify-center items-center">
        <AnimatePresence initial={true}>
          <Routes location={location} key={location.key}>
            <Route index element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}
