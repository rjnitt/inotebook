import React, { useEffect, useState } from "react";
import noteslist from "../notes.json";
import { NoteContext } from "../context/NoteContext";
import { useContext } from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes } = context;

  // const [notesDb, setnotesDb] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="row">
      <AddNote />
      <h1>Your Notes </h1>
      {notes.length === 0 && "No Notes"}
      {notes.map((note) => (
        <div key={note._id} className="col-md-3">
          <NoteItem note={note} />
        </div>
      ))}
    </div>
  );
};
export default Notes;
