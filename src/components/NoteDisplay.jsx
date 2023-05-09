import React from 'react';
import Showdown from 'showdown';

function NoteDisplay({ note }) {
  const converter = new Showdown.Converter();
  const html = converter.makeHtml(note.content);

  return (
    <div>
      <h1>{note.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default NoteDisplay;