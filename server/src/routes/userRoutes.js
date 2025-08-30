import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected route example → Get current logged in user
router.get("/me", protect, (req, res) => {
  res.json({
    message: "User profile",
    user: req.user, // comes from token (decoded in middleware)
  });
});

export default router;
