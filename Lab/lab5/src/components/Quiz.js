import { useState } from 'react';
import Question from './Question';
import { Button } from 'react-bootstrap';

function Quiz() {
    const questions = [
        {
            id: 1,
            question: 'What is the capital of France?',
            options: ['Paris', 'London', 'Berlin', 'Madrid'],
            correctAnswer: 'Paris',
        },
        {
            id: 2,
            question: 'Which planet is known as the Red Planet?',
            options: ['Jupiter', 'Mars', 'Venus', 'Mercury'],
            correctAnswer: 'Mars',
        },
        {
            id: 3,
            question: 'What is 2 + 2?',
            options: ['3', '4', '5', '6'],
            correctAnswer: '4',
        },
    ];

    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    const handleAnswer = (questionId, answer) => {
        setAnswers({ ...answers, [questionId]: answer });
    };

    const calculateScore = () => {
        let correct = 0;
        questions.forEach((q) => {
            if (answers[q.id] === q.correctAnswer) {
                correct += 1;
            }
        });
        setScore(correct);
    };

    return (
        <div className="quiz-container">
            <h1>Quiz</h1>
            {questions.map((question) => (
                <Question
                    key={question.id}
                    question={question}
                    selectedAnswer={answers[question.id]}
                    onAnswer={handleAnswer}
                />
            ))}
            <Button variant="primary" onClick={calculateScore}>
                Submit Quiz
            </Button>
            {score !== null && (
                <div className="mt-3">
                    <h4>
                        Your Score: {score} / {questions.length}
                    </h4>
                </div>
            )}
        </div>
    );
}

export default Quiz;