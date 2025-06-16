import React, { useState } from "react";
import { Container, Button, Card } from "react-bootstrap";

function ToggleVisibility() {
    const [textVisible, setTextVisible] = useState(false);

    const handleClick = () => {
        setTextVisible(!textVisible);
    };

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card
                style={{ width: '25rem', backgroundColor: '#000', color: '#fff' }}
                className="p-4 shadow text-center"
            >
                <h4 className="mb-3">Toggle Visibility</h4>
                <Button
                    variant={textVisible ? "danger" : "success"}
                    onClick={handleClick}
                    className="mb-3"
                >
                    {textVisible ? "Hide" : "Show"}
                </Button>
                {textVisible && <p className="mt-3">Toggle Me</p>}
            </Card>
        </Container>
    );
}

export default ToggleVisibility;
