import React from "react";

function Result({ score, total, onReplay, answers }) {
    return (
        <div>
            <h2>Quiz Complete!</h2>
            <p>Your Score: {score} / {total}</p>
            <h3>Correct Answers:</h3>
            <ul>
                {answers.map((q, idx) => (
                    <li key={idx}>
                        <strong>Q{idx + 1}:</strong> {q.question} <br />
                        <strong>Answer:</strong> {q.answer}
                    </li>
                ))}
            </ul>
            <button onClick={onReplay}>Play Again</button>
        </div>
    );
}

export default Result;
