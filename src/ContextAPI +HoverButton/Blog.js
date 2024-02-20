import React from "react";
import Menu from "./Menu";

export default function Blog() {
  const MenuList = [
    { name: "Technology", path: "/blog" },
    { name: "Science", path: "/contact" },
    { name: "Aronetics", path: "/about" },
    { name: "Politics", path: "/notice" },
  ];
  return (
    <Menu list={MenuList}/>
  );
}
