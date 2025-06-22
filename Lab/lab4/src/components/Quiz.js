import React, { useEffect, useContext, useState } from 'react';
import { QuizContext } from './QuizContext';

const quizData = [
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
        question: 'What is JSX?',
        answers: [
            'A programming language',
            'A file format',
            'A syntax extension for JavaScript',
        ],
        correctAnswer: 'A syntax extension for JavaScript',
    },
];

function Quiz() {
    const { selectedAnswers, setSelectedAnswers } = useContext(QuizContext);
    const [results, setResults] = useState({});

    const handleAnswerChange = (questionIndex, answer) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionIndex]: answer,
        }));
    };

    useEffect(() => {
        const newResults = {};
        quizData.forEach((q, index) => {
            if (selectedAnswers[index]) {
                newResults[index] = selectedAnswers[index] === q.correctAnswer;
            }
        });
        setResults(newResults);
    }, [selectedAnswers]);

    return (
        <div>
            <h1>ReactJS Quiz</h1>
            {quizData.map((q, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <h3>{q.question}</h3>
                    {q.answers.map((ans, i) => (
                        <div key={i}>
                            <label>
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    value={ans}
                                    checked={selectedAnswers[index] === ans}
                                    onChange={() => handleAnswerChange(index, ans)}
                                />
                                {ans}
                            </label>
                        </div>
                    ))}
                    {results[index] !== undefined && (
                        <p>
                            {results[index] ? (
                                <span style={{ color: 'green' }}>Correct!</span>
                            ) : (
                                <span style={{ color: 'red' }}>Incorrect.</span>
                            )}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Quiz;
