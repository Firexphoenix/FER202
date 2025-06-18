import React from "react";

function Question({ data, current, total, onAnswer }) {
    return (
        <div>
            <h2>
                Question {current + 1}/{total}
            </h2>
            <p>{data.question}</p>
            {data.options.map((opt, idx) => (
                <button key={idx} onClick={() => onAnswer(opt)} style={{ display: "block", margin: "8px 0" }}>
                    {opt}
                </button>
            ))}
        </div>
    );
}

export default Question;
