import React, {useRef, useState} from 'react'
import Togglable from './Togglable';

export default function NoteForm({addNote, handleLoginOut}) {

  const [newNote, setNewNote] = useState("");

  const toggableRef= useRef()

  const handleChange = (e) =>{
    setNewNote(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    const noteToAddToState = {
        content: newNote,
        important: Math.random() > 0.5
      };
    
    addNote(noteToAddToState)
    setNewNote('')
    toggableRef.current.toggleVisibility()
  }

  console.log(toggableRef)

  return (
    <Togglable  ref={toggableRef} buttonLabel='New Note'>
    <h3>Create a new note</h3>
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Write your note content"
        type="text"
        onChange={handleChange}
        value={newNote}
      />
      <button>Save</button>
    </form>
    <div>
      <button onClick={handleLoginOut}>Login Out</button>
    </div>
  </Togglable>
  )
}
