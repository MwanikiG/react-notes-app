import { useState, useEffect } from 'react'
import db from '../appwrite/databases';
import { NotesForm } from '../components/NotesForm';
import { Query } from 'appwrite';
import { Note } from '../components/Note';

export const Notes = () => {
  
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    init();
  }, []);

  const init = async () => {

  //  const response = await databases.listDocuments(
  //   import.meta.env.VITE_DATABASE_ID,
  //   import.meta.env.VITE_COLLECTION_ID_NOTES
  //  );

    const response = await db.notes.list(
      [Query.orderDesc('$createdAt')]
    );


   setNotes(response.documents);
  }

  return(
    <>
    <div>
      <h1>🤺My TO-DO List</h1>
    </div>

  <div>
      <NotesForm setNotes={setNotes } />
    <div>
      {notes.map(note => (
        <Note key={note.$id} setNotes ={setNotes} noteData={note} />
      ))}
    </div>
  </div>
  </>
  );
}
