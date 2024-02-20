import React, { useState } from "react";

export default function App6() {
  const [questions, setQuestions] = useState([
    {
      question: "What is 2 + 2?",
      options: ["6", "4"],
      correctAnswer: "4",
    },
    {
      question: "What is 7 - 2?",
      options: ["5", "3"],
      correctAnswer: "5",
    },
  ]);

  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  );

  const handleOptionChange = (quizQIndex, option) => {
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[quizQIndex] = option;
      return updatedAnswers;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate the score
    const score = questions.reduce((acc, question, index) => {
      return question.correctAnswer === userAnswers[index] ? acc + 1 : acc;
    }, 0);

    // Display the result in a pop-up
    window.alert(`You scored ${score} out of ${questions.length}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          {questions.map((quizQ, quizQIndex) => (
            <div key={quizQIndex}>
              <p key={quizQIndex}>{quizQ.question}</p>
              {quizQ.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input
                    type="radio"
                    id={`quizQ_${quizQIndex}_option_${optionIndex}`}
                    name={`quizQ_${quizQIndex}`}
                    value={option}
                    checked={userAnswers[quizQIndex] === option}
                    onChange={() => handleOptionChange(quizQIndex, option)}
                  />
                  <label htmlFor={`quizQ_${quizQIndex}_option_${optionIndex}`}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
