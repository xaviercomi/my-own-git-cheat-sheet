import React from 'react';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import { useState, useEffect } from 'react';
import { cheatCards } from './data/cheatCards.js';

function App() {
  const [listCard, setListCard] = useState([]);

  useEffect(() => {
    setListCard(cheatCards);
  }, []);

  function createCard(newCard) {
    setListCard([
      ...listCard,
      {
        id: listCard.lenght,
        description: newCard.description,
        command: newCard.command,
      },
    ]);
  }

  function deleteCard(cardId) {
    setListCard(listCard.filter((card) => card.id !== cardId));
  }

  return (
    <>
      <Navbar createCard={createCard} />
      <CardList listCard={listCard} deleteCard={deleteCard} />
    </>
  );
}

export default App;
