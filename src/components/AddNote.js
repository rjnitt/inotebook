import React, { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";

export const AddNote = () => {
  const context = useContext(NoteContext);

  const { addNote } = context;
  const [note, setNote] = useState({
    name: "",
    description: "",
    tag: "",
  });
  // console.log("addnote: " + addNote);

  const onHandleChange = (e) => {
    console.log("handling change" + e);
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const onHandleClick = (e) => {
    e.preventDefault();
    console.log("handling click" + e);
    addNote(note.name, note.description, note.tag);
    setNote({ name: "", description: "", tag: "" });
  };

  return (
    <div>
      <h1>Add Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={note.name}
            aria-describedby="emailHelp"
            onChange={onHandleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={note.description}
            name="description"
            onChange={onHandleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            value={note.tag}
            name="tag"
            onChange={onHandleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={onHandleClick}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};
export default AddNote;
