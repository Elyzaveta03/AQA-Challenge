# Chat Room Application

This project is a simple chat room application designed to support automated quality assurance (AQA) testing. The repository includes frontend and backend components and an AQA framework. This guide provides detailed instructions for setting up, running, and testing each component.

---

## Table of Contents

1. [Requirements](#requirements)
2. [Project Structure](#project-structure)
3. [Backend Setup](#backend-setup)
4. [Frontend Setup](#frontend-setup)
5. [Database Setup](#database-setup)
6. [Running AQA Framework](#running-aqa-framework)

---

## Requirements

Ensure that you have the following software installed on your system:

- **Node.js** (v14 or above)
- **npm** (Node Package Manager)
- **PostgreSQL** (or any configured database; instructions provided below)
- **Allure** (for generating reports)
- **npx** (bundled with npm)

---

## Project Structure

```plaintext
AQA-Challenge/
├── backend/               # Backend code and configuration
│   └── app.js             # Main server file
├── frontend/              # Frontend code
│   └── index.html         # Main frontend file
├── tests/                 # AQA test folder with features and step definitions
├── allure-results/        # Directory for Allure test results
├── allure-report/         # Directory for generated Allure report
└── README.md              # Project documentation
```

## BACKEND SETUP

1. **Navigate to the Backend Folder**  
   Open a terminal window and navigate to the `backend` directory of the project.

2. **Install Backend Dependencies**  
   Run the following command to install necessary dependencies:
   ```bash
   npm install
   ```

3. **Start the Backend Server**
   Once dependencies are installed, start the backend server with:
   bash
   Run code
   ```shell
   npm run start:backend
   ```
   The server should now be running on http://localhost:3001 (or the port specified in your configuration).

## DATABASE SETUP

1. **Ensure You Have SQL Database Installed**
    The application uses a SQL database. Ensure a local SQL database is installed and running.

2. **Initialize the Database**
   Use the init.sql file located in the root of the project to set up the database schema and initial data. Run the SQL commands within init.sql using your preferred SQL client or directly in your database console.

3. **Verify Database Connection**
   Make sure the backend server can connect to your SQL database. Adjust any connection settings in the backend configuration files as needed.

## FRONTEND SETUP

1. **Navigate to the Frontend Folder**
   In a terminal window, go to the frontend directory of the project.

2. **Install Frontend Dependencies**
   Execute the following command to install frontend dependencies:
   bash
   Run code
   ```shell
   npm install
   ```
   Start the Frontend
   Open the index.html file in a browser (or configure a server to serve the frontend).
   The frontend should now be accessible at http://localhost:<specified-port>/.

## RUNNING THE AQA FRAMEWORK

1. **Install Test Framework Dependencies**
   Make sure you’re in the root directory, then install dependencies with:
   bash
   Run code
   ```shell
   npm install
   ```

2. **Run all Automated Tests**
   Run the AQA tests using the following command:
   bash
   Run code
   ```shell
   npx cucumber-js --parallel 1
   ```
   
3. **Run tests by annotation (@message) also you can use @login annotation**
   ```shell
   npx cucumber-js --parallel 1 --tags "@message"
   ```

4. **Run tests with report**
   ```shell
   npm run test:allure
   ```
