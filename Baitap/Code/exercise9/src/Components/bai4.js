import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";

// SimpleCard Component
const SimpleCard = ({ item }) => {
    const { title, description, imageUrl } = item;
    return (
        <Card className="border-black" style={{ width: "50rem", border: "1px solid", padding: "10px", boxShadow:"0.5px 0.5px" }}>
            <Container fluid>
                <Row>
                    <Col
                        xs={3}
                        className="d-flex align-items-center justify-content-center"
                    >
                        {imageUrl ? (
                            <img src={imageUrl} alt="" className="w-100 h-100" />
                        ) : (
                            <span className="text-warning fw-bold">IMG</span>
                        )}
                    </Col>
                    <Col xs={9} className="p-2">
                        <h1 className="text-lg fw-bold" style={{paddingLeft:"10px"}}>{title}</h1>
                        <p className="text-muted mt-1 small"style={{paddingLeft:"10px"}}>{description}</p>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
};

// Example Usage
const Bai4 = () => {
    const cardData = {
        title: "Hoai Nguyen - FPT DaNang",
        description: "Mobile: 0982827763",
        imageUrl: "/Logo.png",
    };

    return (
        <div className="p-4">
            <SimpleCard item={cardData} />
        </div>
    );
};

export default Bai4;
