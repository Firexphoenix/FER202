const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
];

function Exercise4() {
    const averageAge = (...ages) => {
        const total = ages.reduce((sum, age) => sum + age, 0);
        return total / ages.length;
    };
    const ages = employees.map(employee => employee.age).filter(age => age !== undefined);
    const avgAge = averageAge(...ages);

    return (
        <div>
            <p>The average age of employees is: {avgAge}</p>
        </div>
    );
}

export default Exercise4;
