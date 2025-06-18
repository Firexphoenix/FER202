import React, { useState } from "react";
import Question from "./components/Question";
import Result from "./components/Result";
import 'bootstrap/dist/css/bootstrap.min.css';

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "London"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Mark Twain", "Shakespeare", "Tolstoy", "Hemingway"],
    answer: "Shakespeare",
  },
  {
    question: "Who is the best Waifu in Genshin Impact?",
    options: ["Yae Miko", "Raiden Ei", "Navia", "Mavuika"],
    answer: "Yae Miko",
  },
];

function QuizApp() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === quizData[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReplay = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="text-center mb-4">🎯 Quiz App</h1>
          {showResult ? (
            <Result
              score={score}
              total={quizData.length}
              answers={quizData}
              onReplay={handleReplay}
            />
          ) : (
            <Question
              data={quizData[current]}
              current={current}
              total={quizData.length}
              onAnswer={handleAnswer}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizApp;
