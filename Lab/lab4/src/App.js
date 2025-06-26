import React, { useState } from 'react';
import Quiz from './components/Quiz';
import { QuizProvider } from './components/QuizContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [quizData, setQuizData] = useState([
    {
      question: 'What is ReactJS?',
      answers: [
        'A JavaScript library for building user interfaces',
        'A programming language',
        'A database management system',
      ],
      correctAnswer: 'A JavaScript library for building user interfaces',
    },
    {
      question: '1+1=?',
      answers: [
        '1',
        '2',
        '3',
      ],
      correctAnswer: '2'
    },
  ]);

  const [started, setStarted] = useState(false);

  // ✅ Thêm câu hỏi từ Result.jsx
  const handleAddQuestion = (newQ) => {
    setQuizData([...quizData, newQ]);
  };

  return (
    <QuizProvider>
      <div className="container py-5">
        {!started ? (
          <div className="text-center">
            <h2 className="mb-4 text-primary">🎯 Welcome to the Quiz App</h2>
            <p className="mb-4">Click the button below to start the quiz.</p>
            <button
              className="btn btn-primary"
              onClick={() => setStarted(true)}
              disabled={quizData.length === 0}
            >
              ▶️ Start Quiz
            </button>
          </div>
        ) : (
          <Quiz quizData={quizData} onAddQuestion={handleAddQuestion} />
        )}
      </div>
    </QuizProvider>
  );
}

export default App;
