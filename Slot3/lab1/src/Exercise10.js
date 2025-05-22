import React, { useState } from "react";

const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];

const Exercise10 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // const filteredEmployees = employees.filter(employee => 
  //   Object.values(employee).some(value => 
  //     String(value).toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  // );

  return (
    <div>
      <h2>Search Employee by Name</h2>
      <input
        type="text"
        placeholder="Type a name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredEmployees.map((emp, id) => (
        <li key={id}>
            {emp.name} - {emp.department} - {emp.age}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Exercise10;