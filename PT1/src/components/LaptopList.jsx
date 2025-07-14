import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col, Form, Container, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LaptopList = () => {
    const [allLaptops, setAllLaptops] = useState([]); // toàn bộ dữ liệu
    const [laptops, setLaptops] = useState([]);       // danh sách hiển thị
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/Laptops')
            .then(res => {
                setAllLaptops(res.data); // lưu tất cả
                setLaptops(res.data);    // hiển thị mặc định
            });
    }, []);

    const handleSearch = () => {
        const filtered = allLaptops.filter(l =>
            (l.brand + ' ' + l.model).toLowerCase().includes(keyword.toLowerCase())
        );
        setLaptops(filtered);
    };

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">Laptop List</h2>

            <InputGroup className="mb-4 search-bar">
                <Form.Control
                    placeholder="Search by brand or model"
                    onChange={e => setKeyword(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSearch()} // nhấn Enter để tìm
                />
                <Button variant="primary" onClick={handleSearch}>
                    Search
                </Button>
            </InputGroup>

            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {laptops.map(laptop => (
                    <Col key={laptop.id}>
                        <Card className="h-100 laptop-card shadow-sm">
                            <Card.Img variant="top" src={laptop.image} className="laptop-img" />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <div>
                                    <Card.Title className="text-primary">{laptop.brand} - {laptop.model}</Card.Title>
                                    <Card.Text><strong>Year:</strong> {laptop.year}</Card.Text>
                                    <Card.Text><strong>Price:</strong> {laptop.price}</Card.Text>
                                </div>
                                <Button variant="outline-primary" onClick={() => navigate(`/laptops/${laptop.id}`)}>
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

export default LaptopList;
