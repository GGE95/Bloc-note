import React from 'react';
import styled from '@emotion/styled';

const NoteItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #555;

  &:hover {
    background-color: #444;
    cursor: pointer;
  }

  h3 {
    color: #ff0000;
    margin: 0;
  }
`;

function NoteList({ notes, onSelect }) {
  return (
    <div>
      {notes.map((note) => (
        <NoteItem key={note.id} onClick={() => onSelect(note)}>
          <h3>{note.title || 'Sans titre'}</h3>
          <p className="truncate">{note.content}</p>
        </NoteItem>
      ))}
    </div>
  );
}

export default NoteList;