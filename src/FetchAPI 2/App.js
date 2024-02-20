import React, { useState, useContext, useEffect } from "react";
import "../App.css";
import { ImageContext } from "./ImageContext";
import { PostContext } from "./PostContext";

export default function App() {
  const [option, setOption] = useState(0);
  const [show, setShow] = useState("");

  //   const [errMsg, setErrMsg] = useState("");

  const { image } = useContext(ImageContext);
  const { post } = useContext(PostContext);

  const handleClick = (value) => {
    if (value === 0) {
      setShow(image);
    } else {
      setShow(post);
    }

    console.log("in function", value);
  };

  console.log("current show", show.length);
  console.log("current option", option);

  return (
    <>
      <div className="border-2 border-[black] w-52 h-52 ">
        {show &&  show.length === 5000? <img src={show[0]?.url} /> : <p>{show[0]?.title}</p>}
      </div>

      <div className="">
        <select
          placeholder="Select"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          <option value="0">Image</option>
          <option value="1">Post</option>
        </select>
      </div>

      <button
        onClick={() => handleClick(parseInt(option))}
        className="bg-[red] rounded-md"
      >
        Click
      </button>
    </>
  );
}
