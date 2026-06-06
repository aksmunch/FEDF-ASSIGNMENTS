import React from "react";

const StudentDetails = React.memo(({ student, onDelete }) => {
  return (
    <li>
      {student}
      <button onClick={() => onDelete(student)}> Delete </button>
    </li>
  );
});

export default StudentDetails;