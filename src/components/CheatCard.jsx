import React from 'react';
import '../styles/cheatCard.css';
import { useState } from 'react';

function CheatCard({ createCard }) {
  const [description, setDescription] = useState('');
  const [command, setCommand] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const newCard = {
      description: description,
      command: command,
    };
    createCard(newCard);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='description...'
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        placeholder='command...'
        onChange={(e) => setCommand(e.target.value)}
      />
      <button>push</button>
    </form>
  );
}

export default CheatCard;
