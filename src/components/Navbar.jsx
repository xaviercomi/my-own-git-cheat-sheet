import React from 'react';
import { useState } from 'react';

function Navbar({ createCard }) {
  const [description, setDescription] = useState('');
  const [command, setCommand] = useState('');

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
