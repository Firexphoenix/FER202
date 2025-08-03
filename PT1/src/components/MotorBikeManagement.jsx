import React, { useState, useEffect } from 'react';
import { useMotorbikesContext } from '../context/MotorbikeContext';
import { Card, Button, Row, Col, Form, Container, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MotobikesList = () => {
    const { state } = useMotorbikesContext();
    const { motorbikes: originalMotorBikes, loading, error } = state;

    const [motorbikes, setMotorbikes] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [sortOption, setSortOption] = useState('');
    const navigate = useNavigate();

    // Cập nhật cars mỗi khi originalCars từ context thay đổi
    useEffect(() => {
        setMotorbikes(originalMotorBikes);
    }, [originalMotorBikes]);

    const handleSort = (option) => {
        let sortedMotorbikes = [...motorbikes];

        if (option === 'price_asc') {
            sortedMotorbikes.sort((a, b) =>
                parseFloat(a.price.replace(/[$,]/g, '')) -
                parseFloat(b.price.replace(/[$,]/g, ''))
            );
        } else if (option === 'price_desc') {
            sortedMotorbikes.sort((a, b) =>
                parseFloat(b.price.replace(/[$,]/g, '')) -
                parseFloat(a.price.replace(/[$,]/g, ''))
            );
        }

        setSortOption(option);
        setMotorbikes(sortedMotorbikes);
    };

    const handleSearch = () => {
        const filtered = originalMotorBikes.filter(l =>
            (l.model).toLowerCase().includes(keyword.toLowerCase())
        );
        setMotorbikes(filtered);
    };

    if (loading) return <Container className="mt-5 text-center"><p>Loading motorbikes...</p></Container>;
    if (error) return <Container className="mt-5 text-center"><p>Error: {error}</p></Container>;

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">Motorbikes List</h2>

            <InputGroup className="mb-4 search-bar">
                <Form.Control
                    placeholder="Search by model"
                    value={keyword}
                    onChange={e => setKeyword(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSearch()}
                />
                <Button variant="primary" onClick={handleSearch}>
                    Search
                </Button>
            </InputGroup>

            <Form.Select
                aria-label="Sort cars"
                value={sortOption}
                onChange={(e) => handleSort(e.target.value)}
                className="mb-3"
            >
                <option value="">-- Sort by --</option>
                <option value="price_asc">Sort by Price (Low to High)</option>
                <option value="price_desc">Sort by Price (High to Low)</option>
            </Form.Select>

            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {motorbikes.map(motorbike => (
                    <Col key={motorbike.id}>
                        <Card className="h-100 motorbike-card shadow-sm">
                            <Card.Img variant="top" src={motorbike.image} className="motorbike-img" />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <div>
                                    <Card.Title className="text-primary">{motorbike.brand} - {motorbike.model}</Card.Title>
                                    <Card.Text><strong>Year:</strong> {motorbike.year}</Card.Text>
                                    <Card.Text><strong>Price:</strong> {motorbike.price}</Card.Text>
                                </div>
                                <Button variant="outline-primary" onClick={() => navigate(`/view/${motorbike.id}`)}>
                                    View Details
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MotobikesList;
