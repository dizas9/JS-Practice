// import React, { useState, useEffect } from "react";
import { useState } from "react";
import "../App.css";
import { motion, AnimatePresence } from "framer-motion";
export default function App() {
  const [showHello, setShowHello] = useState(true);

  setTimeout(() => {
    setShowHello(false);
  }, 2000);
  return (
    <>
      <motion.div
        className="flex flex-col content-center items-center mx-20 my-20 h-fit"
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.5,
          when: "beforeChildren",
          staggerChildren: 1,
        }}
      >
        <AnimatePresence>
          {showHello && (
            <motion.p
              initial={{ y: -220, opacity: 0 }}
              animate={{ y: 0, opacity: [0.2, 0.3, 0.4, 0.4, 0.4, 0.8, 1] }}
              exit={{y:-220}}
              transition={{ delay: 1, duration: 0.5, type: "spring" }}
            >
              Hello
            </motion.p>
          )}
        </AnimatePresence>
        <motion.p
          initial={{ x: -5000, opacity: 0.1 }}
          animate={{ x: 0, opacity: [0.5, 0.8, 1] }}
          transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
        >
          Welcome
        </motion.p>
      </motion.div>
    </>
  );
}
