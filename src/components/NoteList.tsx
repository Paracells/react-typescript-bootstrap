import React from 'react';

import { Note } from '../models/note.model';
import OneNote from './OneNote';

interface Notes {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

function NoteList({ notes, setNotes }: Notes) {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <>
      <h2 className="mt-3">
        {notes.map((note) => (
          <OneNote key={note.id} note={note} handleDelete={handleDelete} />
        ))}
      </h2>
    </>
  );
}

export default NoteList;
