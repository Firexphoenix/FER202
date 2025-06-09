import React, { useState } from "react";

function SearchFilter() {
    const [query, setQuery] = useState("");

    const items = [
        "Apple",
        "Banana",
        "Orange",
        "Mango",
        "Pineapple",
        "Grapes"
    ];

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchFilter;
