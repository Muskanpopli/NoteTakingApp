import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";
// import router from "./routes/healthRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// app.use("/api", router);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

// Error handler
app.use(errorHandler);

// Connect to DB + Redis
connectDB();

export default app;
