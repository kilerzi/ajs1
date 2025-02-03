fetch(
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
) // Replace with your actual API URL
  .then((response) => response.json()) // Convert response to JSON
  .then((data) => {
    const studentNames = data.map(
      (student) => `${student.firstName} ${student.lastName}`
    );
    console.log(studentNames); // Output the array of names
  })
  .catch((error) => console.error("Error fetching students:", error));
