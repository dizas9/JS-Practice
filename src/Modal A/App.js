import React, { useState } from "react";
import "../App.css";
import Modal from "./Modal";

export default function App() {
  const [show, setShow] = useState(false);

  function ShowModal() {
    setShow((prevState) => !prevState);
  }
  return (
    <>
      <Modal show={show} setShow={setShow} />
    </>
  );
}
