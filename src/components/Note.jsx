import React from 'react'
import { useState } from 'react';
import db from '../appwrite/databases';
import DeleteIcon from '../assets/DeleteIcon';

export const Note = ({setNotes, noteData}) => {

    const [note, setNote] = useState(noteData);

    const handleUpdate = async () => {
      const completed = !note.completed
      db.notes.update(note.$id, { completed });
      setNote({...note, completed:completed})
    }

    const handleDelete = async () => {
      db.notes.delete(note.$id);
      setNotes((prevNotes) => prevNotes.filter((n) => n.$id !== note.$id));
    };
    

  return (
    <div className='note-wrapper' >
        <span className='note-body' onClick={handleUpdate} >
            {note.completed ? <s>{note.body}</s> : <> {note.body} </>}
        </span>

        <div  onClick={handleDelete}>
          <DeleteIcon/>
        </div>
      </div>
  )
}
