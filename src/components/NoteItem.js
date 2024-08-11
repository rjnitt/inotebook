import React, { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";

const NoteItem = (props) => {
  const { note } = props;
  const context = useContext(NoteContext);
  const { deleteNote } = context;

  const onHandleDeleteClick = (id) => {
    console.log("onHandleDeleteClick" + id);
    deleteNote(id);
  };

  return (
    <div className="card mx-3 my-3">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <h5 className="card-title">{note.name}</h5>
          <i className="fa-solid fa-pen-to-square mx-2"></i>
          <i
            className="fa-sharp fa-solid fa-trash  mx-2"
            onClick={() => onHandleDeleteClick(note._id)}
          ></i>
        </div>

        <p className="card-text">{note.description}</p>
        <h6 className="card-text">tags: {note.tag}</h6>
        <h6 className="card-text">{note.date}</h6>
      </div>
    </div>
  );
};
export default NoteItem;
