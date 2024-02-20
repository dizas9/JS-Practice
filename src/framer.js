import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function framer() {
  return (
    <>
      <motion.div
        className="border border-black w-24 h-24 rounded-full bg-red-600 ml-52 mt-20"
        transition={{
          x: {
            duration: 2,
            repeat: Infinity,
            ease: "easeIn",
          },
        }}
        animate={{ x: ["0px", "-200px","0px"] }}
      ></motion.div>
    </>
  );
}
