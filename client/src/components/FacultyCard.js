import React from "react";

function FacultyCard({ faculty }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "6px",
        padding: "16px",
        marginBottom: "16px",
        maxWidth: "500px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{faculty.name}</h3>
      <p><strong>Department:</strong> {faculty.department}</p>
      <p><strong>Email:</strong> {faculty.email}</p>
      <p><strong>Phone:</strong> {faculty.phone}</p>
      <p><strong>Room Number:</strong> {faculty.room_number}</p>
      <p><strong>Expertise:</strong> {faculty.expertise}</p>
    </div>
  );
}

export default FacultyCard;
