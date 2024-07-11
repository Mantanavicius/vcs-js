const Komp3 = () => {
  let students = [
    { id: 1, name: "John Smith", grade: 8 },
    { id: 2, name: "Peter Smith", grade: 6 },
    { id: 3, name: "Max Smith", grade: 7 },
    { id: 4, name: "Eve Smith", grade: 4 },
  ];

  const arTeigiamas = (grade) => {
    if (grade >= 5) {
      return "Taip";
    } else {
      return "Ne";
    }
  };

  const vidurkis = () => {
    return (
      students.reduce((sum, stu) => {
        return sum + stu.grade;
      }, 0) / students.length
    );
  };

  const arVirsVidurkio = (studentId) => {
    let stud = students.find((stud) => stud.id === studentId);
    if (stud.grade > vidurkis()) {
      return "Taip";
    } else {
      return "Ne";
    }
  };

  return (
    <>
      <h2>Studentai</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vardas, Pavarde</th>
            <th>Vidurkis</th>
            <th>Ar teigiamas?</th>
            <th>Ar virs vidurkio?</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.grade}</td>
                <td>{arTeigiamas(student.grade)}</td>
                <td>{arVirsVidurkio(student.id)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Komp3;
