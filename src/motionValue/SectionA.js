import React, { useRef } from "react";
import "../App.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SectionA() {
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    // const backgroundColor = useTransform(
    //   scrollYProgress,
    //   [0, 100],
    //   ["#f00", "#00f"]
    // );
  return (
    <motion.section
      className="flex w-72 justify-center mb-[8rem] h-screen text-white bg-red-950"
      ref={targetRef}
      style={{ opacity ,scale }}
    >
      Section A
    </motion.section>
  );
}
