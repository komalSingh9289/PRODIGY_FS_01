<h1>Prodigy Internship Task</h1>
<p>This repository contains the code for a registration and login system created as an internship task for Prodigy. 
  The application is built using React and demonstrates form validation, user authentication, and responsive design using CSS Grid. </p>

<h2>Table of Contents</h2>
>> Overview
>> Features
>> Technologies Used
>> Project Structure
>> Getting Started
>> Usage
>> Screenshots

# Overview
The project provides a user-friendly interface for Secure User Authentication using MERN.
Form validations, error messages, and responsive design make this project a solid example of a front-end application for user authentication.

# Features
>> User Registration: New users can create accounts.
>> User Login: Registered users can log in.
>> Form Validation: Inline error messages for invalid inputs.
>> Error Handling: Handles incorrect login attempts.
>> Responsive Design: CSS Grid ensures a side-by-side layout for form and illustration.

# Technologies Used
>> React: For UI and state management.
>> Axios: For making HTTP requests.
>> CSS Grid: For responsive layout.
>> React Router: For navigation.
>> MongoDb : To store user data.
>> Nodejs & expressjs: For backend

# Project Structure

project-root/
├── public/             
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.js              # Login form component
│   │   └── Register.js           # Registration form component
│   ├── assets/
│   │   └── images/
│   │       └── home.svg
│   │       └── register.svg
│   │       └── profile.svg
│   ├── context/
│   │   └── AuthContext.js        # Authentication context
│   ├── App.js                    # Main app component
│   ├── index.js                  # Entry point
│   └── styles.css                # Styling
└── README.md

# Getting Started

>> Prerequisites
  Node.js (v14 or higher)
  npm or yarn

>> Installation
  Clone the repository:
<div>
bash
Copy code
git clone https://github.com/your-username/prodigy-internship-task.git
cd prodigy-internship-task
</div>

  Install dependencies:
  
bash
Copy code
npm install
Run the development server:

bash
Copy code
npm start
The app will be available at http://localhost:3000.

>> Setting Up the Backend
Ensure you have a backend server running with the following endpoints:

POST /api/auth/register
POST /api/auth/login
Update API URLs in Login.js and Register.js as needed.

# Usage
>> Register: Create a new account by filling in the registration form and submitting.
>> Login: Log in with the registered credentials.
>> Logout: End the session using the logout feature.

# Screenshots

