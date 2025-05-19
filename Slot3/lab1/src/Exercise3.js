const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
];

function Exercise3(){
    return(
      <table border="1" cellPadding="10">
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>department</th>
            </tr>
        </thead>
        <tbody>
            {employees.map((employees,id)=>(
                <tr key={id}>
                    <td>{employees.id}</td>
                    <td>{employees.name}</td>
                    <td>{employees.department}</td>
                </tr>
            ))}
        </tbody>
      </table> 
    );
}
export default Exercise3;