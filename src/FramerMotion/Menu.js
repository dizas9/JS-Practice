import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Menu() {
  const menu = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const containerVarient = {
    hidden:{
        x:500,
    },
    visible:{
        x:0,
        transition:{
            type:"spring",
            stiffness:120,
        }
    }
  }

  return (
    <>
      <motion.div
        className="flex flex-col"
        variants={containerVarient} 
        initial="hidden"
        animate="visible"
      >
        <ul className="flex flex-col gap-3 text-2xl font-medium text-slate-400">
          {menu.map((item, index) => {
            return (
              <motion.li key={index} className="">
                <NavLink to={item.path}>{item.name}</NavLink>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </>
  );
}
