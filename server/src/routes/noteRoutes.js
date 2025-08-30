import express from "express";
import { addNote, getNotes } from "../controllers/noteController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected routes
router.post("/", protect, addNote);
router.get("/", protect, getNotes);

export default router;
