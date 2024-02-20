import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const location = useLocation();

  const Navigate = useNavigate();
  function Back() {
    Navigate("/");
  }

  const { score } = location.state || { score: 0 };
  const fromResult = location.state?.fromResult;

  useEffect(() => {
    if (fromResult) {
      Navigate("/result");
    }
  }, [fromResult, Navigate]);
  return (
    <>
      <p>You score {score} out of 10</p>
      <button onClick={Back}>Try Again</button>
    </>
  );
}
