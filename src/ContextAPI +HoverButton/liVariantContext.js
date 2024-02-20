import React from "react";
import { LiVariantContext } from "./ContextLibrary";

export default function LiVariant(props) {
  const liVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
    visibleWithDelay: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
    exit: {
      x: -50,
      opacity: 1,
    },
  };
  return (
    <LiVariantContext.Provider value={liVariants}>
      {props.children}
    </LiVariantContext.Provider>
  );
}
