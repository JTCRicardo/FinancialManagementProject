# FinanceIt - MERN Stack Application

A personal finance management application built with MongoDB, Express.js, React, and Node.js.

## Prerequisites

- Node.js
- npm
- MongoDB Atlas account (free)

## Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd FinanceIt

# Install all dependencies
npm run install-all

# Setup environment
cp server/.env.example server/.env
cp client/.env.example client/.env

# Start development
npm run dev
```

## Available Scripts

- `npm run dev` - Start both client and server in development mode
- `npm run server` - Start only the server
- `npm run client` - Start only the client
- `npm run install-all` - Install all dependencies
- `npm run build` - Build the React app for production
- `npm start` - Start the production server

## Environment Variables

**Server (.env)**
```
PORT=5001
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/financeit
```

**Client (.env)**
```
REACT_APP_API_URL=http://localhost:5001/api
```

## Project Structure

```
FinanceIt/
├── client/                 # React frontend
├── server/                 # Express backend
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
└── package.json           # Root package.json with scripts
```

## Technologies Used

- React 18
- Express.js
- MongoDB with Mongoose
- Node.js
