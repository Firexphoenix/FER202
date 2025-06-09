import React, { useState } from 'react';

const DragDropList = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
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
        <div>
            {items.map((item, index) => (
                <div
                    key={index}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragEnd={handleDragEnd}
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop(index)}
                    style={{ padding: '10px', background: draggingItem === index ? '#e0e0e0' : 'white' }}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default DragDropList;