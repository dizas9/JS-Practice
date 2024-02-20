import React, { useRef } from "react";
import "../App.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function App() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const y = useTransform(scrollYProgress, [0, 1], [1, 500]);
  return (
    <div className="h-[1000vh]">
      <motion.div
        className="h-screen bg-gray-800 flex justify-center items-center"
        style={{ opacity }}
        ref={ref}
      >
        <motion.p
          className="text-white text-4xl z-10"
          style={{ scale: scale, y }}
        >
          Hello Syrurs
        </motion.p>
      </motion.div>
    </div>
  );
}
