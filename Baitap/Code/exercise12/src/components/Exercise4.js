import React, { useState } from "react";

function TodoList() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState(
        ["Học Lập Trình .NET",
        "Học Lập Trình .JAVA"]);

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
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Please input a Task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={handleAdd}>
                    Add Todo
                </button>
            </div>

            <div>
                <h3>Todo List</h3>
                {todos.map((todo, index) => (
                    <div key={index}>
                        <span>{todo}</span>
                        <button onClick={() => handleDelete(index)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoList;
