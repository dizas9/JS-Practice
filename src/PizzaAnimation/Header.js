import React from "react";
import { NavLink } from "react-router-dom";
import Burger from "./burger";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [click, setClick] = useState(false);
  function menuClick() {
    setClick(!click);
  }

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: "1ms",
        type: "spring",
        stiffness: 50,
        mass: 0.4,
        dumping: 8,
        when: "beforeChildren",
        staggerChildren:0.1,
      },
    },
  };
  const liVariants = {
    hidden: {
      x: 500,
    },
    visible: {
      x: 0,
      transition: {
        duration: "10ms",
        type:"spring",
        stiffness:120,
      },
    },
  };
  return (
    <>
      <Burger click={click} onClick={menuClick} />
      <motion.ul
        className="md:hidden flex flex-col absolute bg-slate-500 px-10 py-7 top-16 right-0 h-fit"
        variants={ulVariants}
        initial="hidden"
        animate={!click ? "" : "visible"}
      >
        <motion.li className="li" variants={liVariants}>
          <NavLink to={"/"}>Home</NavLink>
        </motion.li>
        <motion.li className="li" variants={liVariants}>
          <NavLink to={"/"}>Home</NavLink>
        </motion.li>
        <motion.li className="li" variants={liVariants}>
          <NavLink to={"/"}>Home</NavLink>
        </motion.li>
        <motion.li className="li" variants={liVariants}>
          <NavLink to={"/"}>Home</NavLink>
        </motion.li>
      </motion.ul>
    </>
  );
}
