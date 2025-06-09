import { useState } from 'react';

function ControlledInputField() {
    const [name, setName] = useState('abc');
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                    console.log(e.target.value)
                }}
            />
            <p>Input text: {name}</p>
        </div>
    );
}

export default ControlledInputField;
