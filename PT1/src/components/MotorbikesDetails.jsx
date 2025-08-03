import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const MotobikesDetail = () => {
    const { id } = useParams();
    const [motorbike, setMotorbike] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:9999/Motorbikes/${id}`)
            .then(res => setMotorbike(res.data))
            .catch(err => {
                console.error(err);
                setMotorbike(null);
            });
    }, [id]);

    if (!motorbike) {
        return (
            <Container className="mt-5 text-center">
                <h3>Motorbike not found</h3>
                <Button variant="secondary" onClick={() => navigate(-1)}>Go Back</Button>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col md={6}>
                    <img src={motorbike.image} alt={`${motorbike.brand} ${motorbike.model}`} className="img-fluid rounded shadow-sm" />
                </Col>
                <Col md={6}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title className="text-primary">{motorbike.brand} - {motorbike.model}</Card.Title>
                            <Card.Text><strong>Year:</strong> {motorbike.year}</Card.Text>
                            <Card.Text><strong>Price:</strong> {motorbike.price}</Card.Text>
                            <Card.Text><strong>Description:</strong>{motorbike.description}</Card.Text>
                            <Card.Text><strong>Stock:</strong>{motorbike.stock}</Card.Text>
                            <Button variant="primary" onClick={() => navigate(-1)}>Back to List</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default MotobikesDetail;
