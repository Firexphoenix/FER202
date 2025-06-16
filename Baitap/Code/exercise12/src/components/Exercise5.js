import React, { useState } from "react";
import {
    Container,
    Card,
    Form
} from "react-bootstrap";

function ColorSwitcher() {
    const [color, setColor] = useState("");

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card
                style={{ width: '25rem', backgroundColor: '#000', color: '#fff' }}
                className="p-4 shadow text-center"
            >
                <h4 className="mb-3">Color Switcher</h4>
                <Form.Group>
                    <Form.Label>Choose a color</Form.Label>
                    <Form.Select
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        style={{ backgroundColor: '#333', color: '#fff', border: '1px solid #666' }}
                    >
                        <option value="">Select a color</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="yellow">Yellow</option>
                    </Form.Select>
                </Form.Group>

                {color && (
                    <div
                        style={{
                            width: "150px",
                            height: "150px",
                            backgroundColor: color,
                            margin: "20px auto",
                            border: "2px solid #fff"
                        }}
                    />
                )}
            </Card>
        </Container>
    );
}

export default ColorSwitcher;
