import { Form, Card } from 'react-bootstrap';

function Question({ question, selectedAnswer, onAnswer }) {
    return (
        <Card className="quiz-question">
            <Card.Body>
                <Card.Title>{question.question}</Card.Title>
                <Form>
                    {question.options.map((option) => (
                        <Form.Check
                            key={option}
                            type="radio"
                            label={option}
                            name={`question-${question.id}`}
                            id={`question-${question.id}-${option}`}
                            checked={selectedAnswer === option}
                            onChange={() => onAnswer(question.id, option)}
                        />
                    ))}
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Question;