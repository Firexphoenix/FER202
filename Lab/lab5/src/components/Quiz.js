import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Question from './Question';

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
        <Container className="quiz-container mt-5 mb-5">
            <h1 className="text-center mb-4">Quiz</h1>
            {questions.map((question) => (
                <Question
                    key={question.id}
                    question={question}
                    selectedAnswer={answers[question.id]}
                    onAnswer={handleAnswer}
                />
            ))}
            <div className="text-center mt-4">
                <Button variant="primary" onClick={calculateScore} className="quiz-submit-btn">
                    Submit Quiz
                </Button>
            </div>
            {score !== null && (
                <div className="quiz-score mt-4 text-center">
                    <h4 className="text-success">
                        Your Score: {score} / {questions.length}
                    </h4>
                </div>
            )}
        </Container>
    );
}

export default Quiz;