import Note from "../models/Note.js";
// @desc Add new note
// @route POST /api/notes
// @access Private
export const addNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const note = await Note.create({
      title,
      content,
      user: req.user._id, // from auth middleware
    });

    res.status(201).json({ message: "Note added successfully", note });
  } catch (error) {
    res.status(500).json({ message: "Error adding note", error: error.message });
  }
};

// @desc Fetch notes with pagination
// @route GET /api/notes?page=1&limit=20
// @access Private
export const getNotes = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    

    const notes = await Note.find({ user: req.user._id })
      .sort({ createdAt: -1 }) // latest first
      .skip(skip)
      .limit(limit);
    
    const total = await Note.countDocuments({ user: req.user._id });

    res.json({
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      totalNotes: total,
      notes,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes", error: error.message });
  }
};
