import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const STORAGE_KEY = "timeRemaining";
const QUESTION_KEY = "questionWithShuffledOption";

export default function Test() {
  const [timeRemaining, setTimeRemaining] = useState(
    () => parseInt(localStorage.getItem(STORAGE_KEY)) || 9
  );
  const [questionWithShuffledOption, setQuestionWithShuffledOption] = useState(
    () => {
      try {
        const storedValue = localStorage.getItem(QUESTION_KEY);
        return storedValue ? JSON.parse(storedValue) : null;
      } catch (error) {
        console.error("Error parsing stored JSON:", error);
        return null;
      }
    }
  );
  const Navigate = useNavigate();
  const location = useLocation();
  const { QuestionWithShuffledOption } = location.state || {};
  const FromTest = location.state?.FromTest;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [location, QuestionWithShuffledOption]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, timeRemaining.toString());
    if (timeRemaining <= 0) {
      // Redirect to Timeout component
      Navigate("/timeout", { state: { fromTimeOut: true } });
    }
  }, [timeRemaining, Navigate]);

  useEffect(() => {
    // Check if FromTest is truthy and navigate back to "/test"
    if (FromTest) {
      Navigate("/test");
    }
  }, [FromTest, Navigate]);

  useEffect(() => {
    // Save QuestionWithShuffledOption to localStorage
    if (QuestionWithShuffledOption) {
      setQuestionWithShuffledOption(QuestionWithShuffledOption);
      localStorage.setItem(
        QUESTION_KEY,
        JSON.stringify(QuestionWithShuffledOption)
      );
    }
  }, [QuestionWithShuffledOption]);

  function handleSubmit(e) {
    e.preventDefault();

    let score = 0;

    for (let i = 0; i < questionWithShuffledOption.length; i++) {
      const question = questionWithShuffledOption[i];
      const selectedAnswer = e.target.elements[`question_${i}`].value;

      if (question.correct_answer === selectedAnswer) {
        score++;
      }
    }
    // Clear the localStorage for time
    localStorage.removeItem(STORAGE_KEY);

    // Navigate to the result page with the score
    Navigate("/result", {
      state: { score, fromResult: true },
    });
  }

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  // Split the array into two parts
  const firstHalf = questionWithShuffledOption?.slice(0, 5) || [];
  const secondHalf = questionWithShuffledOption?.slice(5) || [];

  return (
    <div>
      <div>
        Time remaining: {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </div>

      {timeRemaining ? (
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
              {firstHalf.map((question, questionIndex) => (
                <div key={questionIndex}>
                  <p>
                    {questionIndex + 1} :{question.question}
                  </p>
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <input
                        type="radio"
                        value={option}
                        name={`question_${questionIndex}`}
                        id={`question_${questionIndex}_option_${optionIndex}`}
                      />
                      <label
                        htmlFor={`question_${questionIndex}_option_${optionIndex}`}
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              {secondHalf.map((question, questionIndex) => (
                <div key={questionIndex}>
                  <p>
                    {questionIndex + 6} :{question.question}
                  </p>
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <input
                        type="radio"
                        value={option}
                        name={`question_${questionIndex + 5}`}
                        id={`question_${
                          questionIndex + 5
                        }_option_${optionIndex}`}
                      />
                      <label
                        htmlFor={`question_${
                          questionIndex + 5
                        }_option_${optionIndex}`}
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : null}
    </div>
  );
}
