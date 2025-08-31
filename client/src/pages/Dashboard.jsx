import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote, updateNote } from "../store/notesSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);

  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const handleAddNote = () => {
    if (!newNote.title || !newNote.content) return;
    dispatch(addNote({ id: Date.now(), ...newNote }));
    setNewNote({ title: "", content: "" });
  };

  const handleUpdateNote = (id, field, value) => {
    dispatch(updateNote({ id, [field]: value }));
  };

  const handleDeleteNote = (id) => dispatch(deleteNote(id));

  // Drag and drop logic remains the same (update notes array if needed)
  
  return (
    <div>
      {/* Add Note Form */}
      <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          className="p-2 w-full mb-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
        />
        <textarea
          placeholder="Content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
          className="p-2 w-full mb-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
        />
        <button
          onClick={handleAddNote}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Note
        </button>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {notes.map((note, index) => (
          <div
            key={note.id}
            draggable
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition relative"
          >
            <input
              value={note.title}
              onChange={(e) => handleUpdateNote(note.id, "title", e.target.value)}
              className="font-bold mb-2 w-full bg-transparent border-b border-gray-400 focus:outline-none"
            />
            <textarea
              value={note.content}
              onChange={(e) => handleUpdateNote(note.id, "content", e.target.value)}
              className="w-full bg-transparent focus:outline-none resize-none"
            />
            <button
              onClick={() => handleDeleteNote(note.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
