import { Form, Card } from 'react-bootstrap';

function Question({ question, selectedAnswer, onAnswer }) {
    return (
        <Card className="quiz-question shadow-sm mb-4">
            <Card.Body>
                <Card.Title className="text-primary">{question.question}</Card.Title>
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
                            className="quiz-option"
                        />
                    ))}
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Question;