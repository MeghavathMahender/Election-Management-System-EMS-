# Election-Management-System-EMS-

To start your application using `nodemon server.js` and assuming your GitHub username is `MeghavathMahender`, here's how you can update the README file:

---

# Election Management System

## Overview
The Election Management System is an application designed to manage student elections at IIITG. It provides functionalities for voter and candidate registration, manifesto uploads, and secure online voting mechanisms to ensure confidentiality and integrity of the voting process.

## Features
- **Voter Registration**: Students can register as voters.
- **Candidate Registration**: Students can register as candidates and upload manifestos.
- **Online Voting**: Secure mechanism for students to cast their votes online.
- **Admin Dashboard**: Administrative interface to manage elections, view voter and candidate details, and oversee voting processes.

## Tech Stack
- **Frontend**:
  - Embedded JavaScript (EJS)

- **Backend**:
  - Node.js
  - Express.js

- **Database**:
  - MySQL (Relational Database)

## Installation

### Prerequisites
- Node.js
- MySQL Server

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/MeghavathMahender/election-management-system.git
   cd election-management-system
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the database**:
   - Create a MySQL database.
   - Import the database schema from `database/schema.sql`.
   - Update the database configuration in `config/database.js`.

4. **Start the application**:
   ```bash
   nodemon server.js
   ```

5. **Access the application**:
   Open your web browser and go to `http://localhost:3000`.

## Usage
1. **Admin**: Log in to the admin dashboard to manage elections, view voter and candidate details, and monitor the voting process.
2. **Voters**: Register to vote and participate in the election.
3. **Candidates**: Register to stand for election and upload manifestos for voter consideration.

## Contributing
We welcome contributions from the community. If you'd like to contribute, please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgements
- Thanks to Dr. Sanjay Moulik for supervision and guidance.
- Special thanks to the IIITG community for their support and feedback.

---

Replace `MeghavathMahender` with your actual GitHub username if different.
