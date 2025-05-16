function FirstTeenager() {

    const people = [
      { name: "Alice", age: 14, occupation: "engineer" },
      { name: "Bob", age: 21, occupation: "teacher" },
      { name: "Charlie", age: 22, occupation: "doctor" },
    ];
  
    const teenager = people.find(person => person.age >= 13 && person.age <= 19);
  
    return (
      <div>
        <h2>First Teenager</h2>
        {teenager ? (
          <p>
            <strong>Name:</strong> {teenager.name}, <strong>Age:</strong> {teenager.age},{" "}
            <strong>Occupation:</strong> {teenager.occupation}
          </p>
        ) : (
          <p>No teenagers found.</p>
        )}
      </div>
    );
  }
  
  export default FirstTeenager;
  