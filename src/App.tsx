import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CreateNote from './components/CreateNote';
import Header from './components/Header';
import NoteList from './components/NoteList';
import { Note } from './models/note.model';

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: Date.now().toString(),
      title: 'Feed a cat',
      text: "Don't forget to feed the cat",
      color: '#dfdfdf',
      date: new Date().toDateString(),
    },
  ]);
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NoteList notes={notes} setNotes={setNotes} />
            <CreateNote setNotes={setNotes} notes={notes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
