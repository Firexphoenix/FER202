import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, ListGroup, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function listReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return { ...state, items: [...state.items, action.item] };
        case "REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.id),
            };
        case "EDIT_ITEM":
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.id ? { ...item, name: action.newName } : item
                ),
            };
        default:
            return state;
    }
}

const initialState = {
    items: [
        { id: Date.now() - 3, name: "le thi" },
        { id: Date.now() - 2, name: "tra" },
    ],
};

function ItemList() {
    const [state, dispatch] = useReducer(listReducer, initialState);
    const [newItemName, setNewItemName] = useState("");
    const [editItemId, setEditItemId] = useState(null);
    const [editItemName, setEditItemName] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("name");

    const handleAddItem = () => {
        if (newItemName.trim()) {
            const newItem = { id: Date.now(), name: newItemName.trim() };
            dispatch({ type: "ADD_ITEM", item: newItem });
            setNewItemName("");
        }
    };

    const handleRemoveItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", id });
    };

    const handleEditItem = (id, name) => {
        setEditItemId(id);
        setEditItemName(name);
    };

    const handleSaveEdit = (id) => {
        if (editItemName.trim()) {
            dispatch({ type: "EDIT_ITEM", id, newName: editItemName.trim() });
            setEditItemId(null);
            setEditItemName("");
        }
    };

    const handleCancelEdit = () => {
        setEditItemId(null);
        setEditItemName("");
    };

    const sortedAndFilteredItems = () => {
        let items = [...state.items];
        if (searchTerm) {
            items = items.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (sortOption === "name") {
            items.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOption === "time") {
            items.sort((a, b) => a.id - b.id);
        }
        return items;
    };

    return (
        <Container className="mt-4">
            <Row>
                <Col md={6} className="offset-md-3">
                    <Form>
                        <Form.Group controlId="formItem" className="mb-3">
                            <Form.Label>Enter Item:</Form.Label>
                            <div className="input-group">
                                <Form.Control
                                    type="text"
                                    value={newItemName}
                                    onChange={(e) => setNewItemName(e.target.value)}
                                    placeholder="Enter item name"
                                    onKeyPress={(e) => e.key === "Enter" && handleAddItem()}
                                />
                                <Button
                                    variant="primary"
                                    onClick={handleAddItem}
                                    className="ms-2"
                                >
                                    Add Item
                                </Button>
                            </div>
                        </Form.Group>
                        <Form.Group controlId="formSort" className="mb-3">
                            <Form.Label>Sort by:</Form.Label>
                            <Dropdown onSelect={(e) => setSortOption(e)}>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Sort by {sortOption === "name" ? "Name" : "Created Time"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="name">Sort by Name</Dropdown.Item>
                                    <Dropdown.Item eventKey="time">Sort by Created Time</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                    </Form>

                    <h3 className="mt-4">Item List:</h3>
                    <ListGroup>
                        {sortedAndFilteredItems().map((item) => (
                            <ListGroup.Item
                                key={item.id}
                                className="d-flex justify-content-between align-items-center mb-2 p-2 border rounded"
                            >
                                {editItemId === item.id ? (
                                    <div className="d-flex w-100">
                                        <Form.Control
                                            type="text"
                                            value={editItemName}
                                            onChange={(e) => setEditItemName(e.target.value)}
                                            onKeyPress={(e) => e.key === "Enter" && handleSaveEdit(item.id)}
                                        />
                                        <Button
                                            variant="success"
                                            onClick={() => handleSaveEdit(item.id)}
                                            className="ms-2"
                                        >
                                            Save
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            onClick={handleCancelEdit}
                                            className="ms-2"
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="d-flex w-100">
                                        <span className="flex-grow-1">{item.name}</span>
                                        <Button
                                            variant="warning"
                                            onClick={() => handleEditItem(item.id, item.name)}
                                            className="ms-2"
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="danger"
                                            onClick={() => handleRemoveItem(item.id)}
                                            className="ms-2"
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                )}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemList;