# 🌐 **Task Flow** - Server Side

## 📜 Short Description
The **Task Flow** server-side handles the backend for the Task Management App. Built using **Node.js** and **Express**, it provides RESTful APIs for handling tasks, user authentication, and data storage. The server integrates with **MongoDB** to store tasks and user data, and uses **CORS** to enable cross-origin requests. The server supports **environment variables** via **dotenv** and runs in a development environment with **nodemon** to automatically restart on code changes.

## 🛠️ Dependencies
**Task Flow - Server Side** relies on the following technologies:

- **express**: 🖥️ Web framework for Node.js to build RESTful APIs.
- **cors**: 🌐 Middleware to enable Cross-Origin Resource Sharing.
- **dotenv**: 📦 To manage environment variables.
- **mongodb**: 🗄️ A NoSQL database for storing tasks and user data.
- **nodemon**: 🔄 A tool for automatically restarting the server during development.
  
## 💻 Installation Steps
Follow these steps to set up the **Task Flow - Server Side** on your local machine:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Hayder987/Task-Management-server.git

   cd Task-Management-server

   npm install

   npm run dev
   
   ###.env
   DB_USER= your Id
   DB_PASSWORD= your Password


