import React, { ReactElement, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { Note } from './../models/note.model';

interface Props {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

function CreateNote({ notes, setNotes }: Props): ReactElement {
  const [input, setInput] = useState<Note>({
    id: '',
    title: '',
    text: '',
    color: '#dfdfdf',
    date: new Date().toDateString(),
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotes([...notes, { ...input, id: Date.now().toString() }]);
    console.log(notes);
  };
  return (
    <>
      <h2>Create Notes</h2>
      <Form className="mt-3 mb-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="Enter Title for the Note"
            value={input.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Text</Form.Label>
          <Form.Control
            name="text"
            placeholder="Enter your notes"
            as="textarea"
            rows={3}
            value={input.text}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
          <Form.Control
            name="color"
            type="color"
            id="colorInput"
            title="Choose your color"
            value={input.color}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Send
        </Button>
      </Form>
    </>
  );
}

export default CreateNote;
