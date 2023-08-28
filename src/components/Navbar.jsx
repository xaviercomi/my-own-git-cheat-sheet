import React from 'react';
import { useState, useContext } from 'react';
import { CardContext } from '../context/CardContext';

function Navbar() {
  const [description, setDescription] = useState('');
  const [command, setCommand] = useState('');
  const { createCard } = useContext(CardContext);

  function handleSubmit(e) {
    e.preventDefault();

    const newCard = {
      description: description,
      command: command,
    };

    createCard(newCard);

    setDescription('');
    setCommand('');
  }
  return (
    <>
      <div className='navbar'>
        <h1>My own Git cheat sheet</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder='description...'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          autoFocus
        />
        <textarea
          placeholder='command...'
          onChange={(e) => setCommand(e.target.value)}
          value={command}
        />
        <button>push</button>
      </form>
    </>
  );
}

export default Navbar;
