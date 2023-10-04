interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Justin",
	lastName: "Mathews",
	age: 26,
	location: "Windhoeak Namibia",
}

const student2: Student = {
	firstName: "Chris",
	lastName: "Logan",
	age: 29,
	location: "KZN South Africa",
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
table.classList.add("table-bordered")

const thead = document.createElement("thead");

const headerRow = document.createElement("tr");
const headerCell1 = document.createElement("th");
const headerCell2 = document.createElement("th");
const headerCell3 = document.createElement("th");
const headerCell4 = document.createElement("th");

headerCell1.textContent = "First Name"
headerCell2.textContent = "Last Name";
headerCell3.textContent = "Age";
headerCell4.textContent = "Location";

headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);
headerRow.appendChild(headerCell3);
headerRow.appendChild(headerCell4);

thead.appendChild(headerRow);
table.appendChild(thead);

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const Cell1 = document.createElement("td");
  const Cell2 = document.createElement("td");
  const Cell3 = document.createElement("td");
  const Cell4 = document.createElement("td");

  Cell1.textContent = student.firstName;
  Cell2.textContent = student.lastName;
  Cell3.textContent = student.age.toString();
  Cell4.textContent = student.location;

  row.appendChild(Cell1);
  row.appendChild(Cell2);
  row.appendChild(Cell3);
  row.appendChild(Cell4);
  table.appendChild(row);
});

// Append the table to the body of the HTML document
document.body.appendChild(table);
