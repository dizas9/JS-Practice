import React, { useEffect, useState } from "react";

export default function App5() {
  const [Question, setQuestion] = useState([]);

  function Shuffle(option) {
    return option.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    async function FetchQuestion() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple"
      );
      const data = await res.json();

      const QuestionWithShuffleOption = data.results.map((question) => {
        const options = Shuffle([
          question.incorrect_answers[0],
          question.correct_answer,
          question.incorrect_answers[1],
          question.incorrect_answers[2],
        ]);
        return { ...question, options };
      });
      setQuestion(QuestionWithShuffleOption);
    }
    FetchQuestion();
  }, []);
  return (
    <>
      <div>
        {Question &&
          Question.map((question, questionIndex) => (
            <div key={questionIndex}>
              <p>{question.question}</p>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input
                    type="radio"
                    id={`question.${questionIndex}_option.${optionIndex}`}
                    name={`question.question.${questionIndex}`}
                    value={option}
                  />
                  <label htmlFor={`question.${questionIndex}`}>{option}</label>
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
}
