import React, { useState } from "react";
import {
    Container,
    Card,
    Form,
    ListGroup
} from "react-bootstrap";

function SearchFilter() {
    const [query, setQuery] = useState("");

    const items = [
        "Apple",
        "Banana",
        "Orange",
        "Mango",
        "Pineapple",
        "Grapes"
    ];

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card
                style={{ width: '30rem', backgroundColor: '#000', color: '#fff' }}
                className="p-4 shadow"
            >
                <h4 className="text-center mb-4">Search Filter</h4>

                <Form.Control
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{
                        backgroundColor: "#333",
                        color: "#fff",
                        border: "1px solid #666",
                        marginBottom: "20px"
                    }}
                />

                <ListGroup variant="flush">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <ListGroup.Item
                                key={index}
                                style={{ backgroundColor: "#111", color: "#fff" }}
                            >
                                {item}
                            </ListGroup.Item>
                        ))
                    ) : (
                        <ListGroup.Item
                            style={{ backgroundColor: "#111", color: "#888" }}
                        >
                            No matching items found.
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Card>
        </Container>
    );
}

export default SearchFilter;
