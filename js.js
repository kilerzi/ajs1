//fetcnuvame databasot
async function fetchstudents() {
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

//so async go pravime ova da go cekame functionot fetch students
//i gi pisuvame first and last name
async function displaystudentnames() {
  const student = await fetchstudents();
  const studentnames = student.map(
    (student) => `${student.firstName} ${student.lastName}`
  );
  console.log("Student Names:", studentnames);
}
//ja vikame funkcijata da se ispecati
displaystudentnames();

//pravam funkcija za imanga koj gi mesti spored avarage gradot
async function displaysortedstudents() {
  const students = await fetchstudents();

  //sorting the students ascendingly taka sto gi sporeduva site ocenki pomegusebno (mislam deka)
  const sortedstudents = students.sort(
    (a, b) => a.averageGrade - b.averageGrade
  );

  //tuka go printame toj function ako e viknat
  console.log("Sorted Students by Average Grade:", sortedstudents);
}
displaysortedstudents();

async function displaystudentswithhighgrades() {
  const students = await fetchstudents();
  //filtrirame koj students imaat pogolem grade od 3
  const highgradestudents = students.filter(
    (student) => student.averageGrade > 3
  );

  console.log("Students with average grade higher than 3:", highgradestudents);
}

displaystudentswithhighgrades();

async function displayfemalestudentswithperfectgrades() {
  const students = await fetchstudents();

  //fitrirame povtorno female students koj sto imaat perfect grades

  const femaleperfectgradestudents = students.filter(
    (student) => student.gender === "Female" && student.averageGrade === 5
  );

  //gi zimame podatocite koj sto gi stavivme vo linija 57 i gi pecatime iminjata
  const femalestudentnames = femaleperfectgradestudents.map(
    (student) => `${student.firstName} ${student.lastName}`
  );

  console.log(
    "Female students with an average grade of 5:",
    femalestudentnames
  );
}

displayfemalestudentswithperfectgrades();

async function displaymalestudentsinskopjeover18() {
  const students = await fetchstudents();

  //fitrirame isti nacin gore samo za maski sto ziveat vo skopje i se 18

  const maleskopjestudents = students.filter(
    (student) =>
      student.gender === "Male" && student.city === "Skopje" && student.age > 18
  );

  const malestudentfullnames = maleskopjestudents.map(
    (student) => `${student.firstname} ${student.lastname}`
  );

  console.log("Male students in Skopje over 18:", malestudentfullnames);
}

displaymalestudentsinskopjeover18();

async function displayfemalestudentsavggradeover24() {
  const students = await fetchstudents();

  //filtrirame za zenski nad 24
  const femalestudentsover24 = students.filter(
    (student) => student.gender === "Female" && student.age > 24
  );

  //naogjame avarage gradot nivni
  const grades = femalestudentsover24.map((student) => student.averageGrade);

  //tuka go zimame sumot i go sobirame posle go delime so nivniata dolzina (0 e tamu deka treba da pocnuva od 0???)
  const avrageeggrade =
    grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

  console.log("Average grade of female students over 24:", avrageeggrade);
}

displayfemalestudentsavggradeover24();

async function displaymalestudentswithbandgradeover2() {
  const students = await fetchstudents();
  //maski sto pocnuvaat so b i imaat avarage pogolem od 2
  const malebstudentsover2 = students.filter(
    (student) =>
      student.gender === "Male" &&
      student.firstName.startsWith("B") &&
      student.averageGrade > 2
  );
  //i gi printame posle

  const malebstudentfullnames = malebstudentsover2.map(
    (student) => `${student.firstName} ${student.lastName}`
  );

  console.log(
    "Male students with name starting with 'B' and average grade over 2:",
    malebstudentfullnames
  );
}

displaymalestudentswithbandgradeover2();
