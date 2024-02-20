import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Main from "./Main";

export default function TimeOut() {
  const Navigate = useNavigate();
  const location = useLocation();
  const  fromTimeOut  = location.state?.fromTimeOut;
  function Back() {
    Navigate("/");
  }
  useEffect(() => {
    if (fromTimeOut) {
      Navigate("/timeout");
    }
  }, [fromTimeOut, Navigate]);
  return (
    <div>
      Ops timeout!!!!!
      <button onClick={Back}>Try Again</button>
    </div>
  );
}
