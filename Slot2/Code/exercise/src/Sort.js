function Sort() {
  const people = [
    { name: "Alice", age: 20, occupation: "engineer" },
    { name: "Bob", age: 21, occupation: "teacher" },
    { name: "Charlie", age: 22, occupation: "doctor" },
    { name: "Eve", age: 19, occupation: "engineer" },
    { name: "Frank", age: 25, occupation: "teacher" },
  ];

  const sortedPeople = [...people].sort((a, b) => {
    if (a.occupation === b.occupation) {
      return a.age - b.age;
    }
    return a.occupation.localeCompare(b.occupation);
  });

  const groupByOccupation = people.reduce((groups, person) => {
    if (!groups[person.occupation]) { 
      groups[person.occupation] = [];
    }
    groups[person.occupation].push(person);
    return groups;
  }, {});

  const oldest = people.reduce((max, person) => (person.age > max.age ? person : max), people[0]);
  const youngest = people.reduce((min, person) => (person.age < min.age ? person : min), people[0]);

  const averageAges = Object.entries(groupByOccupation).reduce((averages, [occupation, group]) => {
    const totalAge = group.reduce((sum, person) => sum + person.age, 0);
    averages[occupation] = (totalAge / group.length).toFixed(1);
    return averages;
  }, {});

  return (
    <div>
      <h2>People Analysis</h2>

      {/* Exercise 8: Sorted Table */}
      <h3>Sorted People</h3>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {sortedPeople.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Exercise 9: Grouped by Occupation */}
      <h3>Grouped by Occupation</h3>
      <ul>
        {Object.entries(groupByOccupation).map(([occupation, group]) => (
          <li key={occupation}>
            <strong>{occupation}:</strong> {group.map(person => person.name).join(", ")}
          </li>
        ))}
      </ul>

      {/* Exercise 9: Oldest and Youngest */}
      <h3>Oldest and Youngest</h3>
      <p>
        <strong>Oldest:</strong> {oldest.name} ({oldest.age} years old, {oldest.occupation})
      </p>
      <p>
        <strong>Youngest:</strong> {youngest.name} ({youngest.age} years old, {youngest.occupation})
      </p>

      {/* Exercise 10: Average Age per Occupation */}
      <h3>Average Age per Occupation</h3>
      <ul>
        {Object.entries(averageAges).map(([occupation, avgAge]) => (
          <li key={occupation}>
            <strong>{occupation}:</strong> {avgAge} years
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sort;
