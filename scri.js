// Student Data
const students = [
  { id: 1, name: "Akshita", marks: 85, department: "CSE", attendance: 90 },
  { id: 2, name: "Rahul", marks: 72, department: "ECE", attendance: 80 },
  { id: 3, name: "Priya", marks: 95, department: "CSE", attendance: 92 },
  { id: 4, name: "Amit", marks: 60, department: "ME", attendance: 75 },
  { id: 5, name: "Sneha", marks: 78, department: "ECE", attendance: 88 }
];

// 1. Display Student Details
function displayStudents() {
  let result = "";
  for (let student of students) {
    for (let key in student) {
      result += key + ": " + student[key] + "<br>";
    }
    result += "<hr>";
  }
  document.getElementById("output").innerHTML = result;
}

// 2. Calculate Average Marks
function averageMarks() {
  let total = 0;
  for (let student of students) {
    total += student.marks;
  }
  let avg = total / students.length;
  document.getElementById("output").innerHTML = "Average Marks: " + avg.toFixed(2);
}

// 3. Filter Top Students (marks > 75)
function topStudents() {
  let result = "Top Students (marks > 75):<br>";
  for (let student of students) {
    if (student.marks > 75) {
      result += student.name + "<br>";
    }
  }
  document.getElementById("output").innerHTML = result;
}

// 4. Department-wise Student Count
function departmentCount() {
  let count = {};
  for (let student of students) {
    if (count[student.department]) {
      count[student.department]++;
    } else {
      count[student.department] = 1;
    }
  }

  let result = "Department Count:<br>";
  for (let dept in count) {
    result += dept + ": " + count[dept] + "<br>";
  }
  document.getElementById("output").innerHTML = result;
}

// 5. Count Vowels in Student Names
function vowelCount() {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let student of students) {
    for (let char of student.name) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  }

  document.getElementById("output").innerHTML = "Total Vowels in Student Names: " + count;
}