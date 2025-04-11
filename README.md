# Simple Web Application with Login and Welcome Page

This project is a simple web application built with **Node.js** for the backend and **React** for the frontend. It demonstrates a basic login functionality with JWT-based authentication and a protected welcome page visible only to logged-in users.

## Features

### MUST HAVE Functionalities

1. **Login Page**:

   - A page where users can enter their username and password.
   - Displays an error message if the credentials are incorrect.

2. **Welcome Page**:

   - Displays a personalized welcome message: "Welcome! {username}".
   - Accessible only to logged-in users.
   - Redirects unauthenticated users to the login page.

3. **Login Functionality**:

   - Verifies user credentials against a JSON file stored on the backend.
   - Issues a JWT token upon successful login.

4. **JWT Token Usage**:
   - Protects the welcome page by verifying the JWT token.

### NICE TO HAVE Functionalities

1. **Responsive Design**:

   - The application is fully responsive and works well on different screen sizes.

2. **Nice Layout and Design**:
   - Styled using **Tailwind CSS** for a clean and modern look.

## Project Structure

### Backend

- Built with **Node.js** and **Express**.
- Stores registered usernames and passwords in a JSON file.
- Provides endpoints for:
  - User login 
  - User signup


### Frontend

- Built with **React**.
- Pages:
  - **Login Page**: Allows users to log in.
  - **Welcome Page**: Displays a personalized message for logged-in users.
- Uses **React Router 7** for navigation.
- Styled with **Tailwind CSS**.

### Authentication

- JWT tokens are used for authentication.
- Tokens are stored in the browser's `localStorage`.

## How to Run the Project

### Prerequisites

- Node.js installed on your system.
- A package manager like `npm` or `yarn`.

### Backend

Repo https://github.com/TagirSharipov/digit-backend

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. The backend will run on `http://localhost:8080`.

### Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/TagirSharipov/my-digit-app.git
   cd my-digit-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. The frontend will run on `http://localhost:5137`.

## Usage

1. Open the application in your browser at `http://localhost:5137`.
2. Sign up with an email and a password (at least 6 characters).
3. If the credentials are correct, you will be redirected to the welcome page.
4. If the credentials are incorrect, an error message will be displayed.
5. The welcome page will display data fetched via an API call using the token.

## JSON File for User Data

The backend uses a JSON file to store registered usernames and passwords.

## Technologies Used

- **Backend**: Node.js, Express, JWT
- **Frontend**: React, React Router 7, Tailwind CSS

## Future Improvements

- Add token expiration.
- Add automatic logout

## License

This project is licensed under the MIT License.
