import React, { useState } from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const DragDropList = () => {
    const [items, setItems] = useState([
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5'
    ]);
    const [draggingItem, setDraggingItem] = useState(null);

    const handleDragStart = (index) => {
        setDraggingItem(index);
    };

    const handleDragEnd = () => {
        setDraggingItem(null);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (dropIndex) => {
        if (draggingItem === null) return;
        const newItems = [...items];
        const [draggedItem] = newItems.splice(draggingItem, 1);
        newItems.splice(dropIndex, 0, draggedItem);
        setItems(newItems);
        setDraggingItem(null);
    };

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card style={{ width: '30rem', backgroundColor: '#000', color: '#fff' }} className="p-4 shadow">
                <h4 className="text-center mb-4">Drag & Drop List</h4>
                <ListGroup variant="flush">
                    {items.map((item, index) => (
                        <ListGroup.Item
                            key={index}
                            draggable
                            onDragStart={() => handleDragStart(index)}
                            onDragEnd={handleDragEnd}
                            onDragOver={handleDragOver}
                            onDrop={() => handleDrop(index)}
                            style={{
                                backgroundColor: draggingItem === index ? '#444' : '#111',
                                color: '#fff',
                                border: '1px solid #555',
                                marginBottom: '5px',
                                cursor: 'move',
                                transition: 'background-color 0.2s ease'
                            }}
                        >
                            {item}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        </Container>
    );
};

export default DragDropList;
