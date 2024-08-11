import { createContext, useState } from "react";

export const NoteContext = createContext();

const NoteState = (props) => {
  const noteInital = [
    {
      _id: "660145739d4928302e4cd4d2",
      user: "66004dd60e1f4adbf34844ac",
      name: "note1",
      tag: "default",
      description: "description",
      date: "2024-03-25T09:35:47.823Z",
      __v: 0,
    },
    {
      _id: "663248aca422823895a0afb9",
      user: "66004dd60e1f4adbf34844ac",
      name: "new note2",
      tag: "new",
      description: "description2",
      date: "2024-05-01T13:50:36.970Z",
      __v: 0,
    },
    {
      _id: "12233",
      user: "66004dd60e1f4adbf34844ac",
      name: "note111",
      tag: "default",
      description: "description 3",
      date: "2024-03-25T09:35:47.823Z",
      __v: 0,
    },
    {
      _id: "1223312331",
      user: "66004dd60e1f4adbf34844ac",
      name: "new note112",
      tag: "new",
      description: "description4",
      date: "2024-05-01T13:50:36.970Z",
      __v: 0,
    },
    {
      _id: "2124",
      user: "66004dd60e1f4adbf34844ac",
      name: "note6",
      tag: "default",
      description: "description5",
      date: "2024-03-25T09:35:47.823Z",
      __v: 0,
    },
    {
      _id: "663248aca41412421422823895a0afb9",
      user: "66004dd60e1f4adbf34844ac",
      name: "new note5",
      tag: "new",
      description: "description6",
      date: "2024-05-01T13:50:36.970Z",
      __v: 0,
    },
  ];

  const noteInital1 = [];
  const [notes, setNotes] = useState(noteInital1);

  const getNotes = async () => {
    const response = await fetch("http://localhost:3001/notes/getall", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwMDRkZDYwZTFmNGFkYmYzNDg0NGFjIn0sImlhdCI6MTcxMTI5NjYxM30.iA1LW6hVFFdx0HBfnOlGnEPujVYCYj0rrjfXILlmRqI",
      },
    });
    console.log("response from getNotes" + response);

    const json = await response.json();
    console.log("json:::" + json);
    setNotes(json.result);
    // Check if response is successful (status code in the range 200-299)
    if (!response.ok) {
      throw new Error("Failed to add note");
    }
  };

  let url = "http://localhost:3001/notes/create";
  const addNote = async (name, description, tag) => {
    console.log("here adding note");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwMDRkZDYwZTFmNGFkYmYzNDg0NGFjIn0sImlhdCI6MTcxMTI5NjYxM30.iA1LW6hVFFdx0HBfnOlGnEPujVYCYj0rrjfXILlmRqI",
      },
      body: JSON.stringify({ name, description, tag }),
    });
    // Check if response is successful (status code in the range 200-299)
    const json = await response.json();
    console.log("json:::" + json);
    setNotes(notes.concat(json.dbNotes));
    if (!response.ok) {
      throw new Error("Failed to add note");
    }
    console.log("response" + response);
  };

  const deleteNote = async (id) => {
    console.log("here delete note" + id);
    const newNotes = notes.filter((each) => {
      return each._id !== id;
    });
    setNotes(newNotes);
    const response = await fetch("http://localhost:3001/notes/delete/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authtoken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwMDRkZDYwZTFmNGFkYmYzNDg0NGFjIn0sImlhdCI6MTcxMTI5NjYxM30.iA1LW6hVFFdx0HBfnOlGnEPujVYCYj0rrjfXILlmRqI",
      },
    });

    const json = await response.json();
    console.log("deleet json:::" + json);
  };

  // const editNote = (title, description, tag) => {
  //   console.log("here edit note" + title);

  //   const note = {
  //     name: title,
  //     tag: tag,
  //     description: description,
  //   };

  //   setNotes(note);
  // };

  return (
    <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
