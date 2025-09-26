# Campus-Connect:-Cloud-Native-University-Clubs-Events-Platform🌐🎓

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Frontend](https://img.shields.io/badge/Frontend-React-blue)
![Backend](https://img.shields.io/badge/Backend-Serverless-orange)
![Database](https://img.shields.io/badge/Database-Firestore-green)

---

## Project Overview
**Campus-Connect** 🌐is a cloud-native web application that helps students discover, join, and engage with university clubs and events. It features real-time communication, event registration, push notifications, and analytics dashboards—all built with a scalable serverless architecture.

---

## Features
- Browse and filter clubs by category (Sports, Cultural, Tech, etc.)
- User authentication (email + Google login)
- Event creation, registration, and management
- Upload and display club/event images
- Realtime chat & announcements within clubs
- Recommendation system suggesting clubs/events based on interests
- Analytics dashboard for club growth, event participation, and member activity
- Push notifications for upcoming events and updates

---

## Tech Stack
| Layer            | Technology                         |
|-----------------|-----------------------------------|
| Frontend         | React, HTML5, CSS3, JavaScript    |
| Backend          | Firebase Functions / AWS Lambda   |
| Database         | Firestore / DynamoDB              |
| Storage          | Firebase Storage / AWS S3         |
| Authentication   | Firebase Auth / AWS Cognito       |
| Realtime & Chat  | Firestore listeners / AppSync     |
| Notifications    | Firebase Cloud Messaging / SNS    |
| Analytics        | Recharts / QuickSight             |
| Hosting          | Firebase Hosting / AWS S3+CloudFront |

---


- `frontend_react/`  
  &nbsp;&nbsp;├─ React frontend for UI and user interaction
- `backend_functions/`  
  &nbsp;&nbsp;├─ Serverless APIs (Firebase Functions / AWS Lambda)
- `database/`  
  &nbsp;&nbsp;├─ Firestore / DynamoDB schemas and queries
- `storage/`  
  &nbsp;&nbsp;├─ Media files for events and clubs
- `docs/`  
  &nbsp;&nbsp;├─ Documentation, architecture diagrams, and reports
- `tests/`  
  &nbsp;&nbsp;├─ Unit and integration tests

---

## Screenshots
![Homepage](docs/screenshots/homepage.png)
![Club Page](docs/screenshots/club_page.png)
![Analytics Dashboard](docs/screenshots/analytics_dashboard.png)

---

## Setup Instructions

### Prerequisites
- Node.js and npm
- Firebase CLI or AWS CLI configured

### Frontend
```bash
cd frontend_react
npm install
npm start
```

### Backend & Database Setup
 #### Configure Credentials
 Before deploying, make sure your Firebase or AWS CLI is configured with the correct credentials.

 #### Deploy Serverless Functions

**Firebase Functions:**
```bash
firebase deploy --only functions
```
---


## Testing
 ### Frontend
```
npm test
```
 ### Backend (from tests directory)
```
cd tests
```


---

## Contribution
 Contributions are welcome! Please fork the repository and submit a pull request for improvements or bug fixes.

---
## License
 This project is licensed under the MIT License. See the LICENSE file for details.
