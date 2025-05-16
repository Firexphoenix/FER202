function NamePerson() {
    const name = ["Alice"];
    const age = [22];
    const occupation = ["engineer"];

    return (
      <div>
        <h2>Person Details</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Occupation:</strong> {occupation}</p>
      </div>
    );
  }
  
  export default NamePerson;
  