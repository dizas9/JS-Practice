import React from "react";
import Menu from "./Menu";
import { motion } from "framer-motion";
import { useContext } from "react";
import { containerContext} from "./ContextLibrary";


export default function Home() {
  
  const ContainerDIV = useContext(containerContext);
  const MenuList = [
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Notice", path: "/notice" },
  ];
  return (
    <>
      <motion.div 
      variants={ContainerDIV}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
        <Menu list={MenuList} />
      </motion.div>
    </>
  );
}
