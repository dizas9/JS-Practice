import React, { useEffect, useState } from "react";

export default function App4() {
  const [q, setQ] = useState([]);

  useEffect(() => {
    async function Question() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple"
      );
      const data = await res.json();
      setQ(data.results);
    }
    Question();
  }, []);
  return (
    <div>
      {q &&
        q.map((item, index) => {
          const options = [
            item.incorrect_answers[0],
            item.incorrect_answers[1],
            item.incorrect_answers[2],
            item.correct_answer,
          ].sort(() => Math.random() - 0.5);

          return (
            <>
              <div key={index}>
                <p>{item.question}</p>
                {options &&
                  options.map((q, i, s = 1) => (
                    <>
                      <input
                        type="radio"
                        key={i}
                        value={q}
                        id={`option${i}`}
                        name="options"
                      />
                      <label htmlFor={`option${i}`} key={i}>
                        {q}
                      </label>
                    </>
                  ))}
              </div>
            </>
          );
        })}
    </div>
  );
}
