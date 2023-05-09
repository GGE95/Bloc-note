import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Showdown from 'showdown';

const converter = new Showdown.Converter();

const TitleInput = styled.input`
  background-color: #333;
  border: none;
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 10px;
  width: 100%;
`;

const TextArea = styled.textarea`
  background-color: #333;
  border: none;
  color: #ffffff;
  height: 200px;
  resize: none;
  width: 100%;
`;

const Preview = styled.div`
  padding: 20px;
  background-color: #1e1e1e;
  border: 1px solid #555;
  margin-bottom: 10px;
`;

function NoteEditor({ note, onSave }) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
  }, [note]);

  const handleSave = () => {
    onSave({ ...note, title, content });
  };

  const contentHtml = content ? converter.makeHtml(content) : '';

  return (
    <div>
      <Preview dangerouslySetInnerHTML={{ __html: contentHtml }} />
      <TitleInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre"
      />
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Contenu de la note"
      />
      <button onClick={handleSave} disabled={!content}>
        Sauvegarder
      </button>
    </div>
  );
}

export default NoteEditor;
