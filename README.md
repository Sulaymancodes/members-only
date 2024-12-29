# Members-only
## Members Only
### Members Only is a web application that allows authenticated users to create anonymous posts. The application utilizes PostgreSQL as its database and is deployed on Railway. It is built with Node.js, Express, and Passport.js for authentication.

## Features

### User authentication with Passport.js.

### Secure session handling.

### Create, read, and view anonymous posts.

### Role-based access for users with membership status.

## Tech Stack

### Backend: Node.js, Express.js

### Database: PostgreSQL

### Authentication: Passport.js

### Environment Management: dotenv

## Deployment
### The application is deployed on Railway. Ensure the DATABASE_URL environment variable is set correctly for production. The connection will use SSL if the NODE_ENV is set to production.
## Usage
### - Register or log in to access the app's features.
### - Create and view anonymous posts.
### - Membership status determines additional access rights.
## Folder Structure
### - routes/ - Application routes for authentication and posts.
### - views/ - EJS templates for rendering pages.
### - public/ - Static assets such as CSS and images.
### - db/ - Database-related scripts and configurations.
### - config/ - Passport.js configuration for authentication.
