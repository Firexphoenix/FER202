import React, { useState } from "react";
import {
    Container,
    Card,
    Form,
    Button,
    ListGroup,
    Row,
    Col
} from "react-bootstrap";

function TodoList() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([
        "Học Lập Trình .NET",
        "Học Lập Trình .JAVA"
    ]);

    const handleAdd = () => {
        if (task.trim() !== "") {
            setTodos([...todos, task]);
            setTask("");
        }
    };

    const handleDelete = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card
                style={{ width: '35rem', backgroundColor: '#000', color: '#fff' }}
                className="p-4 shadow"
            >
                <h4 className="mb-4 text-center">Todo List</h4>

                <Form className="mb-4">
                    <Row>
                        <Col xs={8}>
                            <Form.Control
                                type="text"
                                placeholder="Please input a Task"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                style={{
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    border: '1px solid #666'
                                }}
                            />
                        </Col>
                        <Col xs={4}>
                            <Button variant="success" onClick={handleAdd} className="w-100">
                                Add Todo
                            </Button>
                        </Col>
                    </Row>
                </Form>

                <ListGroup variant="flush">
                    {todos.map((todo, index) => (
                        <ListGroup.Item
                            key={index}
                            className="d-flex justify-content-between align-items-center"
                            style={{ backgroundColor: '#111', color: '#fff' }}
                        >
                            {todo}
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => handleDelete(index)}
                            >
                                Delete
                            </Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        </Container>
    );
}

export default TodoList;
