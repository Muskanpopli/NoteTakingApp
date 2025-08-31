# 📝 Note Taking App

A secure **desktop note-taking app** built with **React, Electron, Node.js, MongoDB, and Redis**.  
Users can log in, create, sync, and view their notes with offline-first support.

---

## 🚀 Tech Stack
- **Frontend**: React + Tailwind CSS + Electron
- **Backend**: Node.js + Express
- **Database**: MongoDB (persistent storage)
- **Cache**: Redis (for fast notes fetching)
- **Auth**: JWT (Access + Refresh tokens)
- **Realtime**: WebSockets
- **Packaging**: Electron Builder (.exe for Windows)

---
## ⚙️ Installation & Dependencies
- **Clone Repository**: `git clone [REPO_LINK] && cd [REPO_FOLDER]`  
- **Install Dependencies**: `npm install`  
- **Environment Variables**: Create a `.env` file with:  
  - `PORT=5000`  
  - `MONGO_URI=your_mongodb_connection_string`
  - `JWT_SECRET`
  - `REDIS_URI`
- **Run Server**: `npm run dev`  
- **Access App**: Open your browser at `http://localhost:5000`  


