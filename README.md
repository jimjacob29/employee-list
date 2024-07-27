# Employee List Application

This README.md provides instructions for setting up and running the employee-list application, a React app that displays employee data in cards.

## Prerequisites

* Node.js and npm (or yarn) installed on your system. You can download them from [https://nodejs.org/](https://nodejs.org/).

## Installation

1. **Clone the repository:** 

Navigate to the project directory:

Bash
cd employee-list
Use code with caution.

Switch to the main branch (optional, if applicable):

Bash
git checkout main

Install dependencies:

Bash
npm install

Run the application:

Bash
npm start

You can then access the application in your browser at http://localhost:3000.

Technologies Used
Frontend:

React
Tailwind CSS


Backend (Mock API):

https://mockapi.io/ (used for mocking API responses)

Contact
If the mock API is not working as expected, please contact the developer at jimjacob29@gmail.com.

Description
This project is a simple React application that displays employee data in cards. Each card shows the employee's name, profile picture, links to their email and phone number, and a delete button. The application also includes a functionality to add new employees.

## Components
The application utilizes several React components:

Main Wrapper Component: This component serves as the central hub for managing employee data, including fetching, deleting, and adding new entries.
Card Component: This component renders individual employee details with contact information links and a delete button. It also incorporates hover animations for interactivity.
Add Employee Component: This component displays a form to capture new employee information and handle form submissions.
Modal Component: This component manages the appearance and behavior of a modal window, typically used for add functionality and other interactions.


## Interactions
# Cards
Hover Interaction: Cards respond with visual changes when hovered over.
Click Interaction: Clicking on email or phone number links opens those applications (may require configuration).
Delete Interaction: Clicking the delete button removes the corresponding employee from the list.
Contact Icon Animations: Contact icons display subtle animations on hover.
# Modal
Click Outside to Close: Clicking outside the modal area closes it.
# Add Form
Input Validation: All fields are mandatory, ensuring complete employee data capture.


