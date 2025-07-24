import React, { useEffect, useState } from "react";
import axios from "axios";
import FacultyCard from "./FacultyCard";

function Home() {
  const [faculty, setFaculty] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/faculty")
      .then((res) => setFaculty(res.data))
      .catch((err) => console.error("Error fetching faculty:", err));
  }, []);

  const filtered = faculty.filter((f) =>
    f.name.toLowerCase().includes(query.toLowerCase()) ||
    f.department.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Faculty Finder</h2>
      <input
        type="text"
        placeholder="Search by name or department..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "300px", padding: "8px", marginBottom: "20px" }}
      />
      <div>
        {filtered.length > 0 ? (
          filtered.map((fac) => <FacultyCard key={fac.id} faculty={fac} />)
        ) : (
          <p>No faculty found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
