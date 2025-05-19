const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
];
function Exercise8() {
    const groupedEmployees = employees.reduce((groups, employee) => {
        const department = employee.department || "No Department";
        if (!groups[department]) groups[department] = [];
        groups[department].push(employee);
        return groups;
    }, {});

    return (
        <div>
            {Object.keys(groupedEmployees).map(department => (
                <div key={department}>
                    <h3>{department}</h3>
                    <ul>
                        {groupedEmployees[department].map((employee, index) => (
                            <li key={employee.id || index}>
                                {employee.name || "Unknown"} (Age: {employee.age || "N/A"})
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Exercise8;
