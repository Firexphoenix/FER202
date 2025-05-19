const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
];

function Exercise6() {
    const itEmployees = employees.filter(employee => employee.department === "IT");

    return (
        <div>
            <ul>
                {itEmployees.map(employee => (
                    <li key={employee.id || employee.name}>
                        {employee.name || "Unknown"} (Age: {employee.age || "N/A"})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Exercise6;
