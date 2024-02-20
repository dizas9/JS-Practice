import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";

export default function Modal({ show, setShow }) {
  const controls = useAnimationControls();
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, [setShow]);

  useEffect(() => {
    async function logo() {
      await controls.start({ y: "-100vh" });
      await controls.start({ y: 0 }, { duration: 1 });
      await controls.start(
        { rotateY: [0, 30, 60, 90, 180, 360] },
        { duration: 2 , repeat:Infinity, delay:1  }
      );
    }
    if (show) {
      logo();
    }
  }, [show, controls]);

  return (
    <>
      {/* <AnimatePresence mode="wait"> */}
      {show && (
        <motion.div
          className="fixed top-0 bottom-0 w-full h-full bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            id="modal"
            className="border-2 text-white text-center w-32 m-auto mt-20 bg-slate-600 "
            initial={{ y: 0 }}
            animate={controls}
          >
            Hello Modal
          </motion.div>
        </motion.div>
      )}
      {/* </AnimatePresence> */}
    </>
  );
}
