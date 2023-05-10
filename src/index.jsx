import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import './index.css';
import styled from '@emotion/styled';
import { GlobalStyles } from './GlobalStyles';
import NoteList from './components/NoteList';
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import NoteEditor from './components/NoteEditor';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftPanel = styled.div`
  width: 20%;
  border-right: 1px solid #555;
`;

const RightPanel = styled.div`
  width: 80%;
  padding: 20px;
`;

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    setSelectedNote({
      id: new Date().getTime(),
      title: '',
      content: '',
    });
  };

  const handleSaveNote = (updatedNote) => {
    setNotes((prevNotes) => {
      const index = prevNotes.findIndex((note) => note.id === updatedNote.id);
      if (index === -1) {
        return [...prevNotes, updatedNote];
      } else {
        return prevNotes.map((note) =>
          note.id === updatedNote.id ? updatedNote : note
        );
      }
    });
    setSelectedNote(updatedNote);
  };

  const handleSelectNote = (note) => {
    setSelectedNote(note);
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <LeftPanel>
          <button onClick={handleAddNote}>Ajouter une note</button>
          <NoteList notes={notes} onSelect={handleSelectNote} />
        </LeftPanel>
        <RightPanel>
          {selectedNote ? (
            <>
              <NoteDisplay note={selectedNote} />
              <NoteEditor note={selectedNote} onSave={handleSaveNote} />
            </>
          ) : null
          }
        </RightPanel>
      </Container>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
