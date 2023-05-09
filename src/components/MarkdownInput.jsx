import React, { useState } from 'react';

function MarkdownInput({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onAddNote(title, content);
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Titre de la note"
      />
      <textarea
        value={content}
        onChange={handleContentChange}
        placeholder="Contenu de la note en Markdown"
      ></textarea>
      <button type="submit">Sauvegarder</button>
    </form>
  );
}

export default MarkdownInput;
