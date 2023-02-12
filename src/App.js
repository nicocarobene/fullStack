import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { getAllNotes } from "./services/notes/getAllNotes";
import { createNote } from "./services/notes/createNote";

function App() {
  const [note, setNote] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
      getAllNotes().then((res) => {
        console.log(res)
        setNote(res);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const noteToAddToState = {
      content: newNote,
    };
    console.log(newNote);
    createNote(noteToAddToState)
      .then(res => setNote(prevNote=> [...prevNote, res]))

    // setNote([...note, noteToAddToState]);
    setNewNote("");
  };

  const Notes = ({ date, content }) => {
    return (
      <li>
        <p>{content}</p>
        <small> {date} </small>
      </li>
    );
  };

  return (
    <div className="App">
      <h1>Notes</h1>
      {loading ? 'Cargando, por favor espere':''}
      <ol>
        {note.map((note) => (
          <Notes key={note.id} {...note} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear Nota</button>
      </form>
    </div>
  );
}

export default App;
