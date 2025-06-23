import React, { useContext, useState } from 'react';
import { QuizContext } from './QuizContext';
import Question from './Question';
import Result from './Result';

function Quiz({ quizData, onAddQuestion }) {
    const {selectedAnswers, setSelectedAnswers } = useContext(QuizContext);
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (selected) => {
        const correct = quizData[current].correctAnswer;
        if (selected === correct) {
            setScore(score + 1);
        }

        setSelectedAnswers({
            ...selectedAnswers,
            [current]: selected,
        });

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
        setSelectedAnswers({});
    };

    return (
        <div className="card shadow">
            <div className="card-body">
                <h2 className="text-center text-primary mb-4">🌟 React Quiz 🌟</h2>
                {showResult ? (
                    <Result
                        score={score}
                        total={quizData.length}
                        answers={quizData}
                        onReplay={handleReplay}
                        onAddQuestion={onAddQuestion}
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
    );
}

export default Quiz;
