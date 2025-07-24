-- Step 1: Create the database
CREATE DATABASE IF NOT EXISTS faculty_finder;
USE faculty_finder;

-- Step 2: Create the 'faculty' table
CREATE TABLE IF NOT EXISTS faculty (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  department VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  room_number VARCHAR(20),
  expertise TEXT
);

-- Step 3: Create the 'users' table (for login/register)
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL
);

-- Step 4: Insert sample faculty data
INSERT INTO faculty (name, department, email, phone, room_number, expertise)
VALUES
  ('Dr. Anjali Verma', 'Computer Science', 'anjali@university.edu', '9876543210', 'B-202', 'AI, Machine Learning'),
  ('Prof. Ramesh Patel', 'Electrical Engineering', 'ramesh@university.edu', '9765432190', 'E-110', 'Embedded Systems'),
  ('Dr. Kavita Sharma', 'Mathematics', 'kavita@university.edu', '9123456780', 'M-310', 'Statistics, Data Analysis'),
  ('Dr. Suresh Rao', 'Mechanical Engineering', 'suresh@university.edu', '9898989898', 'ME-102', 'Thermodynamics, Robotics');

-- Step 5: Insert sample user for login testing (email: test@user.com, password: 123456)
INSERT INTO users (name, email, password)
VALUES ('Test User', 'test@user.com', '123456');
```

Once you run this, you'll have:

* A database `faculty_finder`
* Two tables: `faculty` and `users`
* Four sample faculty entries
* One test user (for login)
