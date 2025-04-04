# Portfolio Website

## Overview
This is a personal portfolio website showcasing my skills, projects, and experiences as a software developer and data analyst. The website includes an interactive about page, project showcases, a contact form integrated with Firebase Firestore, and a downloadable CV.

## Features
- **Home Page**: Introduction and welcome section.
- **About Page**: Detailed background, skills, and experiences.
- **Projects Section**: Display of featured projects with descriptions and links.
- **Contact Form**: Users can send messages, stored in Firebase Firestore.
- **Downloadable CV**: A button centered on the About page with a hover effect matching theme colors.

## 🛠️ Technologies Used
- **Front-end**: HTML, CSS, JavaScript
- **Database**: Firebase Firestore
- **Hosting**: Gitpages

## 📂 Project Structure
```
portfolio-website/
│── index.html        # Main entry file
│── about.html        # About page
│── projects.html     # Projects showcase
│── contact.html      # Contact form
│── styles/           # CSS styles
│── scripts/          # JavaScript files
│   ├── firebaseConfig.js   # Firebase setup
│   ├── contact.js    # Handles form submissions
│   ├── auth.js       # Handles user authentication
│── assets/           # Images, icons, CV
│── README.md         # Project documentation
```

## 🔧 Setup & Installation
### 1. Clone the Repository
```sh
git clone https://github.com/ron-crypto/portfolio.git
cd portfolio
```

### 2. Install Firebase Tools (if deploying with Firebase Hosting)
```sh
npm install -g firebase-tools
firebase login
```

### 3. Configure Firebase
- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a project & enable **Firestore Database** & **Authentication**
- Copy your Firebase config & update `firebaseConfig.js`

### 4. Run Locally (Optional)
If using a local server:
```sh
npx http-server
```
Then, open `http://localhost:8080` in your browser.

## 📜 License
This project is open-source and free to use under the MIT License.

## 📧 Contact
For any inquiries, reach out via the contact form on the website or email me at moenron8@gmail.com

