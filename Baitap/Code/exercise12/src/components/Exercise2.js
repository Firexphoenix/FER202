import { useState } from 'react';
import { Container, Form, Card } from 'react-bootstrap';

function ControlledInputField() {
    const [name, setName] = useState('abc');

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card
                style={{ width: '30rem', backgroundColor: '#000', color: '#fff' }}
                className="p-4 shadow"
            >
                <h4 className="mb-3">Controlled Input Example</h4>
                <Form.Group controlId="formName">
                    <Form.Label style={{ color: '#fff' }}>Enter your name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        placeholder="Type something..."
                        style={{ backgroundColor: '#333', color: '#fff', border: '1px solid #666' }}
                        onChange={(e) => {
                            setName(e.target.value);
                            console.log(e.target.value);
                        }}
                    />
                </Form.Group>
                <p className="mt-3">Input text: <strong>{name}</strong></p>
            </Card>
        </Container>
    );
}

export default ControlledInputField;
