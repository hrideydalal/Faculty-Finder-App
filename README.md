# Faculty Finder App

The **Faculty Finder App** is a full-stack web application that enables students to quickly search and view detailed profiles of faculty members, including their contact information, department, room number, and area of expertise. It features user registration and login, real-time search, and a modern UI — all built with the MERN stack (React, Node.js, Express, MySQL).

---

## 🚀 Features

- 🔐 User authentication (Login/Register)
- 🔍 Search faculty by name or department
- 📄 View faculty profiles with email, phone, room number, expertise
- ✅ MySQL-powered backend with REST API
- 🖥️ Responsive, modern frontend using React
- 💾 Real-time data display from database

---

## 🛠️ Tech Stack

| Layer       | Technology            |
|-------------|------------------------|
| Frontend    | React, Axios, CSS      |
| Backend     | Node.js, Express       |
| Database    | MySQL                  |
| API         | RESTful endpoints      |
| Auth        | Simple login/register  |
| Tools       | npm, GitHub            |

---

## 📁 Project Structure

```
faculty-finder-app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Home.js
│   │   │   ├── FacultyCard.js
│   │   │   └── FacultyCard.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
├── server/                 # Node.js + Express backend
│   ├── server.js
│   └── package.json
├── database/               # SQL setup
│   └── schema.sql
├── .gitignore
└── README.md
```

---

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/faculty-finder-app.git
cd faculty-finder-app
```

---

### 2. Set Up the Backend

```bash
cd server
npm install
```

✅ Create MySQL database using this schema:

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

✅ Start the backend:

```bash
npm start
```

Runs at: [http://localhost:5000](http://localhost:5000)

---

### 3. Set Up the Frontend

```bash
cd ../client
npm install
npm start
```

Runs at: [http://localhost:3000](http://localhost:3000)

---

## ✅ Usage Flow

1. Register as a new user
2. Login with your email and password
3. Use the search bar to find faculty
4. View faculty profile cards with full details

---

## 🖼️ Screenshots

> You can add screenshots of your UI here (Login, Register, Search, Profile views)

---

## 📌 To-Do / Future Improvements

- Add logout/session using JWT or localStorage
- Role-based admin dashboard
- Edit/delete faculty profiles (admin only)
- Pagination for large faculty datasets
- Deploy backend & frontend to production

---

## 👤 Author

**Hridey Dalal**  
📧 [hrideydalal1@gmail.com](mailto:hrideydalal1@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/hridey-/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
