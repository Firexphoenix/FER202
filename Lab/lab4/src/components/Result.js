import React, { useState } from "react";

function Result({ score, total, answers, onReplay, onAddQuestion }) {
    const [newQuestion, setNewQuestion] = useState('');
    const [newAnswers, setNewAnswers] = useState(['', '', '', '']);
    const [newCorrectAnswer, setNewCorrectAnswer] = useState('');

    const handleAddAnswer = (index, value) => {
        const updated = [...newAnswers];
        updated[index] = value;
        setNewAnswers(updated);
    };

    const handleSubmit = () => {
        if (
            newQuestion.trim() !== '' &&
            newAnswers.every((a) => a.trim() !== '') &&
            newCorrectAnswer.trim() !== ''
        ) {
            const newQ = {
                question: newQuestion,
                answers: newAnswers,
                correctAnswer: newCorrectAnswer,
            };
            onAddQuestion(newQ); // gọi hàm từ App
            setNewQuestion('');
            setNewAnswers(['', '', '', '']);
            setNewCorrectAnswer('');
        }
    };

    return (
        <div>
            <h2 className="text-success">Quiz Complete!</h2>
            <p>Your Score: <strong>{score} / {total}</strong></p>
            <h5 className="mt-4">Correct Answers:</h5>
            <ul className="list-group">
                {answers.map((q, idx) => (
                    <li key={idx} className="list-group-item">
                        <strong>Q{idx + 1}:</strong> {q.question} <br />
                        <strong>Answer:</strong> {q.correctAnswer}
                    </li>
                ))}
            </ul>

            <hr />
            <h5 className="mt-4">➕ Add New Question</h5>
            <div className="mb-3">
                <label className="form-label">Question</label>
                <input
                    className="form-control"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                />
            </div>

            {newAnswers.map((ans, i) => (
                <div className="mb-2" key={i}>
                    <label className="form-label">Answer {i + 1}</label>
                    <input
                        className="form-control"
                        value={ans}
                        onChange={(e) => handleAddAnswer(i, e.target.value)}
                    />
                </div>
            ))}

            <div className="mb-3">
                <label className="form-label">Correct Answer</label>
                <select
                    className="form-select"
                    value={newCorrectAnswer}
                    onChange={(e) => setNewCorrectAnswer(e.target.value)}
                >
                    <option value="">-- Select correct answer --</option>
                    {newAnswers.map((ans, i) => (
                        <option key={i} value={ans}>
                            {ans || `Answer ${i + 1}`}
                        </option>
                    ))}
                </select>
            </div>

            <button className="btn btn-success me-2" onClick={handleSubmit}>
                ➕ Add Question
            </button>

            <button className="btn btn-secondary mt-3" onClick={onReplay}>
                🔁 Play Again
            </button>
        </div>
    );
}

export default Result;
