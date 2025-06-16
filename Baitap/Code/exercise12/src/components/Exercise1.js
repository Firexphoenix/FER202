import React, { useState } from 'react';
import { Container, Button, Card } from 'react-bootstrap';

function Count() {
    const [count, setCount] = useState(0);

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card style={{ width: '30rem', backgroundColor: '#000', color: '#fff' }} className="text-center shadow">
                <Card.Body>
                    <Card.Title>Increment</Card.Title>
                    <Card.Text>
                        You clicked <strong>{count}</strong> times
                    </Card.Text>
                    <Button variant="primary" onClick={() => setCount(count + 1)}>
                        Click me
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Count;
