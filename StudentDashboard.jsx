import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import StudentDetails from "./StudentDetails";

function StudentDashboard() {
  const [students, setStudents] = useState([
    "Akshita",
    "bhan",
    "Priya",
  ]);

  const [newStudent, setNewStudent] = useState("");

  const inputRef = useRef(null);

  // Focus when component loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Update browser title
  useEffect(() => {
    document.title = `Students: ${students.length}`;
  }, [students]);

  // Add student
  const addStudent = () => {
    if (newStudent.trim() !== "") {
      setStudents([...students, newStudent]);
      setNewStudent("");
    }
  };

  // Memoized delete function
  const deleteStudent = useCallback((name) => {
    setStudents((prev) => prev.filter((student) => student !== name));
  }, []);

  // Memoized calculations
  const totalStudents = useMemo(() => {
    return students.length;
  }, [students]);

  const totalCharacters = useMemo(() => {
    return students.reduce((sum, student) => sum + student.length, 0);
  }, [students]);

  return (
    <div>
      <h2>Student Management Dashboard</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter student name"
        value={newStudent}
        onChange={(e) => setNewStudent(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>

      <h3>Total Students: {totalStudents}</h3>
      <h3>Total Characters: {totalCharacters}</h3>

      <ul>
        {students.map((student, index) => (
          <StudentDetails
            key={index}
            student={student}
            onDelete={deleteStudent}
          />
        ))}
      </ul>
    </div>
  );
}

export default StudentDashboard;