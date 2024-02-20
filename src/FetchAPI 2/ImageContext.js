import React, { createContext, useEffect, useState } from "react";

// step 1 : create context
export const ImageContext = createContext();

// step 2 : create Provider Component

export  function ImageProvider({ children }) {
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function FetchImage() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");

        const imgs = await res.json();

        setImage(imgs);
      } catch (error) {
        setError("Failed to fetch Image");
      }
    }

    //call function
    FetchImage();
  }, []);

  //return

  return (
    <ImageContext.Provider value={{ image, error }}>
      {children}
    </ImageContext.Provider>
  );
}
