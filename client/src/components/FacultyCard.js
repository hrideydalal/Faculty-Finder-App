import React from "react";
import "./FacultyCard.css";

function FacultyCard({ faculty }) {
  return (
    <div className="faculty-card">
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
