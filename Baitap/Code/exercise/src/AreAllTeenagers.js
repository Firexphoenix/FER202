function AreAllTeenagers() {
    const people = [
      { name: "Alice", age: 14, occupation: "engineer" },
      { name: "Bob", age: 17, occupation: "student" },
      { name: "Charlie", age: 22, occupation: "doctor" },
    ];
  
    const allTeenagers = people.every(person => person.age >= 13 && person.age <= 19);
  
    return (
      <div>
        <h2>Are All Teenagers?</h2>
        {allTeenagers ? (
          <p>Yes, all of them are teenagers.</p>
        ) : (
          <p>No, not all of them are teenagers.</p>
        )}
      </div>
    );
  }
  
  export default AreAllTeenagers;
  