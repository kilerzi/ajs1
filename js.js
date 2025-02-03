async function fetchStudents() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching students:", error);
    return [];
  }
}

async function displayStudentNames() {
  const students = await fetchStudents();
  const studentNames = students.map(
    (student) => `${student.firstName} ${student.lastName}`
  );
  console.log("Student Names:", studentNames);
}
displayStudentNames();

async function displaySortedStudents() {
  const students = await fetchStudents(); // Fetch students data

  // Sort the students by averageGrade in ascending order
  const sortedStudents = students.sort(
    (a, b) => a.averageGrade - b.averageGrade
  );

  console.log("Sorted Students by Average Grade:", sortedStudents); // Log the sorted students
}

displaySortedStudents(); // Call the function to display sorted students
