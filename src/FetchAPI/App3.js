import React, { useEffect, useState } from "react";

// Function to decode HTML entities
const decodeEntities = (html) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value;
};

export default function QuizComponent() {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    async function fetchQuizData() {
      try {
        const res = await fetch(
          "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple"
        );
        const data = await res.json();
        setQuizData(data.results);
      } catch (err) {
        console.log(err);
      }
    }

    fetchQuizData();
  }, []);

  return (
    <>
      {quizData &&
        quizData.map((item, index) => {
          const decodedQuestion = decodeEntities(item.question);

          // Shuffle the array of options
          const shuffledOptions = [
            item.incorrect_answers[0],
            item.incorrect_answers[1],
            item.incorrect_answers[2],
            item.correct_answer,
          ].sort(() => Math.random() - 0.5);

          return (
            <div key={index}>
              <p dangerouslySetInnerHTML={{ __html: decodedQuestion }} />
              {shuffledOptions.map((option, i) => (
                <p key={i}>{option}</p>
              ))}
            </div>
          );
        })}
    </>
  );
}
