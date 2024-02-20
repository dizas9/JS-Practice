// Container.js
import { containerContext } from "./ContextLibrary";

export default function Container(props) {

  const ContainerDIV = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        staggerChildren: 0.1,
      },
    },
    visibleWithDelay: {
      opacity: 1,
      transition: {
        type: "tween",
        staggerChildren: 0.1,
        duration:5
      },
    },
    exit: {
     x:"-100vw",
     transition:{
      duration:1
     }
    },
  };
  return (
    <containerContext.Provider value={ContainerDIV}>
      {props.children}
    </containerContext.Provider>
  );
}
