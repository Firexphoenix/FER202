import React, { useReducer } from 'react';

function formReducer(state, action) {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.value };
        case "SET_AGE":
            return { ...state, age: action.value };
        default:
            return state;
    }
}
function ChangeNameAge() {
    // Khởi tạo useReducer với reducer và initial state
    const [state, dispatch] = useReducer(formReducer, { name: '', age: '' });

    // Xử lý khi người dùng thay đổi input
    const handleNameChange = (e) => {
        dispatch({ type: 'SET_NAME', value: e.target.value }); // Truyền value vào action
    };

    const handleAgeChange = (e) => {
        dispatch({ type: 'SET_AGE', value: e.target.value }); // Truyền value vào action
    };

    return (
        <div>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={state.name}
                    onChange={handleNameChange}
                    placeholder="Input name"
                />
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="text"
                    value={state.age}
                    onChange={handleAgeChange}
                    placeholder="Input age"
                />
            </div>
            <div>
                <h3>Name: {state.name}</h3>
                <h3>Age: {state.age}</h3>
            </div>
        </div>
    );
}

export default ChangeNameAge;
