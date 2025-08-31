import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: JSON.parse(localStorage.getItem("notes")) || [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action) {
      state.notes.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    updateNote(state, action) {
      const { id, title, content } = action.payload;
      const note = state.notes.find((n) => n.id === id);
      if (note) {
        note.title = title;
        note.content = content;
        localStorage.setItem("notes", JSON.stringify(state.notes));
      }
    },
    deleteNote(state, action) {
      state.notes = state.notes.filter((n) => n.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    loadNotes(state) {
      const storedNotes = localStorage.getItem("notes");
      if (storedNotes) state.notes = JSON.parse(storedNotes);
    },
  },
});

export const { addNote, updateNote, deleteNote, loadNotes } = notesSlice.actions;
export default notesSlice.reducer;
