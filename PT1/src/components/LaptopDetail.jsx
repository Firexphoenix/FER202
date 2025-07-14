import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // thêm useNavigate
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const LaptopDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // khởi tạo điều hướng
    const [laptop, setLaptop] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3001/Laptops/${id}`)
            .then(res => setLaptop(res.data))
            .catch(() => setLaptop(null));
    }, [id]);

    if (laptop === null)
        return <h2 className="text-center mt-5">Laptop Not Found (404)</h2>;

    return (
        <div className="container mt-4">
            <Card className="detail-card">
                <Card.Img variant="top" src={laptop.image} className="detail-img" />
                <Card.Body>
                    <Card.Title className="detail-title">{laptop.brand} {laptop.model}</Card.Title>
                    <Card.Text><strong>Year:</strong> {laptop.year}</Card.Text>
                    <Card.Text><strong>Price:</strong> {laptop.price}</Card.Text>
                    <Card.Text><strong>Model:</strong> {laptop.model}</Card.Text>

                    {/* Nút trở lại */}
                    <Button
                        variant="secondary"
                        className="mt-3"
                        onClick={() => navigate('/laptops')}
                    >
                        ⬅ Back to Laptop List
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default LaptopDetail;
