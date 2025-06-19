import React, { useReducer, useEffect, useState } from "react";
import { Button, Container, Row, Col, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
    questions: [
        {
            id: 1,
            question: "What is the capital of Australia?",
            options: ["Sydney", "Canberra", "Melbourne", "Perth"],
            answer: "Canberra",
        },
        {
            id: 2,
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            id: 3,
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            answer: "Pacific Ocean",
        },
    ],
    currentQuestion: 0,
    selectedOption: "",
    score: 0,
    showScore: false,
    showFeedback: false,
};

function quizReducer(state, action) {
    switch (action.type) {
        case "SELECT_OPTION":
            return { ...state, selectedOption: action.payload, showFeedback: true };
        case "NEXT_QUESTION":
            const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
            return {
                ...state,
                score: isCorrect ? state.score + 1 : state.score,
                currentQuestion: state.currentQuestion + 1,
                selectedOption: "",
                showFeedback: false,
                showScore: state.currentQuestion + 1 === state.questions.length,
            };
        case "RESTART_QUIZ":
            return { ...initialState };
        default:
            return state;
    }
}

function QuestionBank() {
    const [state, dispatch] = useReducer(quizReducer, initialState);
    const { questions, currentQuestion, selectedOption, score, showScore, showFeedback } = state;
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        if (!showScore && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0 && !showScore) {
            handleNextQuestion();
        }
    }, [timeLeft, showScore]);

    useEffect(() => {
        if (!showScore) setTimeLeft(10);
    }, [currentQuestion, showScore]);

    const handleOptionSelect = (option) => {
        dispatch({ type: "SELECT_OPTION", payload: option });
    };

    const handleNextQuestion = () => {
        dispatch({ type: "NEXT_QUESTION" });
    };

    const handleRestartQuiz = () => {
        dispatch({ type: "RESTART_QUIZ" });
    };

    const getFeedback = () => {
        if (!showFeedback || !selectedOption) return null;
        const isCorrect = selectedOption === questions[currentQuestion].answer;
        return isCorrect ? (
            <Alert variant="success" className="mt-3 d-flex align-items-center">
                <FaCheckCircle /> Correct! 🎉
            </Alert>
        ) : (
            <Alert variant="danger" className="mt-3 d-flex align-items-center">
                <FaTimesCircle /> Incorrect! The correct answer is: {questions[currentQuestion].answer}
            </Alert>
        );
    };

    const highScore = localStorage.getItem("highScore")
        ? parseInt(localStorage.getItem("highScore"))
        : 0;
    useEffect(() => {
        if (showScore && score > highScore) {
            localStorage.setItem("highScore", score);
        }
    }, [showScore, score, highScore]);

    return (
        <Container className="mt-4">
            <Row>
                <Col md={8} className="offset-md-2">
                    {showScore ? (
                        <div className="text-center">
                            <h2>Your Score: {score} / {questions.length}</h2>
                            <h4>High Score: {localStorage.getItem("highScore") || 0}</h4>
                            <Button variant="primary" onClick={handleRestartQuiz} className="mt-3">
                                Restart Quiz
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <h4>
                                Progress: {currentQuestion + 1} / {questions.length}
                            </h4>
                            <h4>
                                Time Left: <span style={{ color: timeLeft < 5 ? "red" : "black" }}>
                                    {timeLeft}s
                                </span>
                            </h4>
                            <h4>
                                Question {questions[currentQuestion].id}:<br />
                                {questions[currentQuestion].question}
                            </h4>
                            <div className="d-flex justify-content-around mt-3">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <Button
                                        key={index}
                                        variant={selectedOption === option ? "success" : "outline-secondary"}
                                        className="m-1"
                                        onClick={() => handleOptionSelect(option)}
                                        style={{ minWidth: "120px" }}
                                    >
                                        {option}
                                    </Button>
                                ))}
                            </div>
                            {getFeedback()}
                            <Button
                                variant="primary"
                                className="mt-3"
                                disabled={!selectedOption}
                                onClick={handleNextQuestion}
                            >
                                {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                            </Button>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default QuestionBank;