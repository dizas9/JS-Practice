import React, { useEffect, useState } from "react";

export default function App2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchQ() {
      try {
        const cachedData = localStorage.getItem("triviaData");
        if (cachedData) {
          setData(JSON.parse(cachedData));
        } else {
          const res = await fetch(
            "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple"
          );
          const jsonData = await res.json();
          setData(jsonData.results);
          // Cache the data
          localStorage.setItem("triviaData", JSON.stringify(jsonData.results));
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchQ();
  }, []);

  return (
    <>{data && data.map((item, index) => <p key={index}>{item.question}</p>)}</>
  );
}
