function PeopleList() {
  const names = ["Alice", "Bob", "Charlie"];
  const ages = [20, 21, 22];
  const occupations = ["engineer", "teacher", "doctor"];

  return (
    <div>
      <h2>People List</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {names.map((name, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{ages[index]}</td>
              <td>{occupations[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleList;
