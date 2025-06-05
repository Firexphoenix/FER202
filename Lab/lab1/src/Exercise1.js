function Exercise1() {
  const employee = { name: "John Doe", age: 30, department: "IT" };
  const {name,age,department}=employee;
  return (
    <div className="App">
      <h1 style={{color:"blue"}}>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>Department: {department}</p>
    </div>
  );
}

export default Exercise1;
