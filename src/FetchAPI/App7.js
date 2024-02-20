import React from "react";

export default function App6() {
  const data = [
    {
      question: "What is 2 + 2?",
      options: ["6", "4"],
      correctA: "4",
    },
    {
      question: "What is 7 - 2?",
      options: ["5", "3"],
      correctA: "5",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialize score
    let score = 0;

    // Loop through data to check answers
    for (let index = 0; index < data.length; index++) {
      const question = data[index];
      const selectedAnswer = e.target.elements[`quizQ_${index}`].value;

      if (question.correctA === selectedAnswer) {
        score++;
      }
    }
    // Display the result in a pop-up
    window.alert(`You scored ${score} out of ${data.length}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          {data.map((quizQ, quizQIndex) => (
            <div key={quizQIndex}>
              <p key={quizQIndex}>{quizQ.question}</p>
              {quizQ.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input
                    type="radio"
                    id={`quizQ_${quizQIndex}_option_${optionIndex}`}
                    name={`quizQ_${quizQIndex}`}
                    value={option}
                  />
                  <label htmlFor={`quizQ_${quizQIndex}`}>{option}</label>
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
