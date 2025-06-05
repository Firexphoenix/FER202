const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
];

function Exercise9() {
    const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

    return (
        <div>
            <p>Is there any teenager in the employee list? {isTeenager ? "Yes" : "No"}</p>
        </div>
    );
}

export default Exercise9;
