# Campus-Connect-Cloud-Native-University-Clubs-Events-Platform
A modern, cloud-native web application for managing university clubs and events. Built with a serverless architecture, it enables students to discover clubs, register for events, and stay engaged through real-time updates and analytics.

Features

Browse and filter clubs by category (Sports, Cultural, Tech, etc.).

User authentication with email and Google login.

Event creation, registration, and management.

Upload and display club and event images.

Realtime chat and announcements within clubs.

Lightweight recommendation system suggesting clubs/events based on interests and participation.

Analytics dashboard for club growth, event participation, and member activity.

Push notifications for upcoming events and club updates.

Project Structure

The project is organized into the following directories:

frontend_react: React frontend for UI and user interaction.

backend_functions: Serverless APIs implemented using Firebase Functions / AWS Lambda.

database: Firestore / DynamoDB schemas and queries.

storage: Cloud storage for event posters and media files.

docs: Documentation, architecture diagrams, and reports.

tests: Unit tests and integration tests for frontend, backend, and database.

Setup Instructions
Prerequisites

Node.js and npm installed.

Python 3.x (optional for scripts).

Firebase CLI / AWS CLI configured for deployment.

Frontend Setup

Navigate to the frontend_react directory.

Install dependencies:

npm install


Run the development server:

npm start

Backend & Database Setup

Configure Firebase / AWS credentials.

Deploy serverless functions:

firebase deploy --only functions


or for AWS Lambda:

sam deploy

Testing

Run frontend tests:

npm test


Run backend tests from tests directory.

Contribution

Contributions are welcome! Please fork the repository and submit a pull request for enhancements or bug fixes.

License

This project is licensed under the MIT License. See the LICENSE file for details.
