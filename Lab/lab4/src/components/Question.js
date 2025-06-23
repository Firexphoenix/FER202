import React from "react";

function Question({ data, current, total, onAnswer }) {
    return (
        <div>
            <h4 className="mb-3">Question {current + 1} / {total}</h4>
            <p className="fw-bold">{data.question}</p>
            {data.answers.map((opt, idx) => (
                <button
                    key={idx}
                    onClick={() => onAnswer(opt)}
                    className="btn btn-outline-primary d-block w-100 text-start mb-2"
                >
                    {opt}
                </button>
            ))}
        </div>
    );
}

export default Question;
