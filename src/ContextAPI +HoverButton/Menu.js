import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LiVariantContext } from "./ContextLibrary";

export default function Menu({ list }) {
  const LiVariants = useContext(LiVariantContext);

  return (
    <>
      <ul className="text-white text-3xl text-center flex flex-col gap-3 p-10 border-none">
        {list.map((item, index) => {
          return (
            <motion.li key={index} className="" variants={LiVariants}>
              <NavLink to={item.path}>{item.name}</NavLink>
            </motion.li>
          );
        })}
      </ul>
    </>
  );
}
