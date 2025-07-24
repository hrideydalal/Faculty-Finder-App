# Faculty Finder App

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Tech Stack](https://img.shields.io/badge/Built%20With-React%20%7C%20Node.js%20%7C%20MySQL-blue)

A full-stack web application that enables students to easily search and view detailed profiles of faculty members — including contact information, departments, rooms, and research expertise. This system is designed to simplify faculty discovery and streamline communication within institutions.

---

## 🚀 Features

- 🔐 Secure user registration and login
- 🔍 Search faculty by name or department
- 👨‍🏫 Detailed faculty profiles: email, phone, room, expertise
- 🧩 RESTful API with Express.js and MySQL
- ⚡ Modern, responsive frontend using React
- 📦 Backend and database integrated with real-time data sync

---

## 🛠️ Tech Stack

| Layer       | Technology           |
|-------------|-----------------------|
| Frontend    | React, Axios, CSS     |
| Backend     | Node.js, Express.js   |
| Database    | MySQL                 |
| Authentication | Basic login/register |
| Dev Tools   | npm, GitHub           |

---

## 📁 Project Structure

```
faculty-finder-app/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Login.js
│       │   ├── Register.js
│       │   ├── Home.js
│       │   ├── FacultyCard.js
│       │   └── FacultyCard.css
│       ├── App.js
│       ├── index.js
│       └── index.css
├── server/                 # Node.js backend
│   ├── server.js
│   └── package.json
├── database/               # SQL schema setup
│   └── schema.sql
├── .gitignore
└── README.md
```

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/faculty-finder-app.git
cd faculty-finder-app
```

---

### 2. Backend Setup (Node.js + Express + MySQL)

```bash
cd server
npm install
```

✅ Then create the MySQL database using this schema:

```sql
CREATE DATABASE faculty_finder;

USE faculty_finder;

CREATE TABLE faculty (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  department VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(20),
  room_number VARCHAR(20),
  expertise TEXT
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(100)
);
```

✅ Optional test data:

```sql
INSERT INTO faculty (name, department, email, phone, room_number, expertise)
VALUES
  ('Dr. Anjali Verma', 'Computer Science', 'anjali@university.edu', '9876543210', 'B-202', 'AI, ML'),
  ('Prof. Ramesh Patel', 'Electrical Engg.', 'ramesh@university.edu', '9765432190', 'E-110', 'Embedded Systems');

INSERT INTO users (name, email, password)
VALUES ('Test User', 'test@user.com', '123456');
```

✅ Start the backend server:

```bash
npm start
```

Runs at: [http://localhost:5000](http://localhost:5000)

---

### 3. Frontend Setup (React)

```bash
cd ../client
npm install
npm start
```

Runs at: [http://localhost:3000](http://localhost:3000)

---

## ✅ How to Use

1. Register or login using the form.
2. Use the search field to find a faculty member.
3. View complete details like department, room number, phone, email, and expertise.

---

## 📌 To-Do / Roadmap

- [ ] Add logout functionality (JWT or localStorage)
- [ ] Admin role to manage faculty records
- [ ] Edit/Delete options for admin
- [ ] Pagination for large faculty lists
- [ ] Deploy on Render, Netlify, or Vercel

---

## 👤 Author

**Hridey Dalal**  
📧 [hrideydalal1@gmail.com](mailto:hrideydalal1@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/hridey-/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
