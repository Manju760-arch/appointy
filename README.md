
# 🏥 Hospital Appointment Booking System (MERN Stack)

A full-stack **Hospital Appointment Booking System** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).  
This project allows users to book appointments with specific doctors and provides an admin panel to manage users and appointments.

---

## 🚀 Features

### 👤 User Side
- Home page with **logo animation using setTimeout**
- User **Register & Login** with authentication
- Hospital **Overview Page**
- **Schedule Appointment** with specific doctors
- **Blog Page** for hospital/project-related blogs
- **Services Page** with service details
- **Hearing Aids Page** showing available hearing aids
- **About Page** with hospital information
- **Location Page** with hospital location details
- **Search Feature** for easy navigation

---

### 🔐 Admin Side
- Separate **Admin Login** with authentication
- View **all registered users**
- View **all booked appointments**
- Appointment management dashboard

---

## 🛠 Tech Stack

### Frontend
- React.js
- CSS
- Context API

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- JWT (JSON Web Token)

---

## 📂 Project Structure
hospital-appointment-booking/ │ ├── frontend/ │   ├── src/ │   ├── components/ │   ├── pages/ │   └── context/ │ ├── backend/ │   ├── models/ │   ├── routes/ │   ├── controllers/ │   └── middleware/ │ └── README.md
Copy code

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
git clone https://github.com/your-username/your-repo-name.git 
2️⃣ Install dependencies
Frontend
Copy code
Bash
cd frontend
npm install
npm start
Backend
Copy code
Bash
cd backend
npm install
npm run dev
🔑 Environment Variables
Create a .env file in the backend folder and add:
Copy code

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


📌 Learning Outcomes
MERN Stack full project workflow
Authentication & Authorization
Role-based access (User & Admin)
CRUD operations
Search functionality
Real-world hospital appointment logic
🙌 Acknowledgements
This project was built for learning and skill enhancement in full-stack web development.
