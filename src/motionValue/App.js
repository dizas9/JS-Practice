import React from "react";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import "../App.css";
import { useScroll, motion, useMotionValue, useTransform } from "framer-motion";

export default function App() {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const opacityOutput = [0, 1, 0];
  const colorOutput = ["#f00", "#fff", "#888"];

  const opacity = useTransform(x, xInput, opacityOutput);
  const color = useTransform(x, xInput, colorOutput);

  function handleMouseMode(event) {
    x.set(event.clientX);
  }
  return (
    <motion.div
      className="h-10 w-10 bg-red-700 m-10"
      style={{ opacity, backgroundColor: color }}
      onMouseMove={handleMouseMode}
    ></motion.div>
  );
}
