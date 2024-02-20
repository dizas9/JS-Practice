import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchCat() {
      const res = await fetch("https://opentdb.com/api_category.php");
      const data = await res.json();
      setData(data.trivia_categories);
      //   console.log(data.trivia_categories[0].name);
    }
    fetchCat();
  }, []);
  return (
    <>
      {data.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </>
  );
}
