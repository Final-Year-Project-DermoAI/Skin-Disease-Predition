# 🌐 SkinTermo Web Application

Welcome to the **SkinTermo Web Application**, a modern, responsive, and cross-platform frontend interface built with **React** and **Vite**. 

This application provides dedicated portals for Patients, Doctors, and Administrators to interact with the SkinTermo AI ecosystem.

---

## 🚀 Technologies

- **Framework**: React.js
- **Build Tool**: Vite (Lightning fast HMR & bundling)
- **Styling**: Modern CSS / CSS Modules
- **Routing**: React Router (implied)
- **State/API**: Integration with SkinTermo Node.js Backend

---

## 📂 Project Structure & Pages Overview

The web application is modularized by user roles and core responsibilities under `src/pages/`:

### 🌍 1. Landing Portal (`/Landing`)
The entry point for all unregistered users, showcasing platform capabilities.
* **LandingPage.jsx** - The main presentation page.
* **Features.jsx** - Overview of SkinTermo capabilities.
* **Intelligence.jsx** - Showcase of AI integrations.
* **Network.jsx** - Information on the doctor network.
* **Portal.jsx** - Entry gates for different user types.

### 🔐 2. Authentication (`/Auth`)
* **Login.jsx** - Unified login for Patients, Doctors, and Admins.
* **Signup.jsx** - User registration form.

### 🧑‍⚕️ 3. Patient Portal (`/Patient`)
Interface for standard users to utilize AI services and manage health data.
* **Dashboard.jsx** / **Home.jsx** - Central hub for the patient.
* **SkinScan.jsx** - Upload images for instant AI skin condition analysis.
* **DoctorFinder.jsx** - Browse and connect with specialized dermatologists.
* **AIChat.jsx** - Real-time medical chat powered by SkinTermo AI.
* **AccountPage.jsx** - Patient profile and settings management.

### 👨‍⚕️ 4. Doctor Portal (`/Doctor`)
Interface for medical professionals to manage verifications and patients.
* **Dashboard.jsx** - Overview of appointments and patient requests.
* **DoctorOnboarding.jsx** - Profile completion and credential verification.
* **PatientManagement.jsx** - View and manage linked patient diagnostic history.
* **Settings.jsx** - Manage doctor profile details and preferences.

### 👑 5. Administrator Portal (`/Admin`)
* **Dashboard.jsx** - Platform oversight and statistics.
* **DoctorManagement.jsx** - Approve/Reject doctor onboarding requests and verify credentials.

---

## 🛠️ Setup & Installation

**1. Install Dependencies**
```bash
npm install
```

**2. Configure Environment**
Rename `.env.example` to `.env` and set your backend API URL (e.g., `VITE_API_URL=http://localhost:3000`).

**3. Run the Development Server**
```bash
npm run dev
```

**4. Build for Production**
```bash
npm run build
npm run preview
```

---

## 🤝 Contributing
Ensure all newly created components are modular and responsive. Always use standard ESLint formatting before submitting pull requests.
