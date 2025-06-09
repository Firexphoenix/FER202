import React, { useState } from "react";

function ToggleVisibility() {
    const [textVisible, setTextVisible] = useState(false);

    const handleClick = () => {
        setTextVisible(!textVisible);
    };

    return (
        <div>
            <button onClick={handleClick}>
                {textVisible ? "Hide" : "Show"}
            </button>
            {textVisible && <p>Toggle Me</p>}
        </div>
    );
}

export default ToggleVisibility;
