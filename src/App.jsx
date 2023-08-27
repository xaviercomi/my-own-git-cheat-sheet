import React from 'react';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import CheatCard from './components/CheatCard';
import { useState, useEffect } from 'react';
import './styles/cardList.css';
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
        id: listCard.length,
        description: newCard.description,
        command: newCard.command,
      },
    ]);
  }

  return (
    <>
      <Navbar />
      <CheatCard createCard={createCard} />
      <CardList listCard={listCard} />
    </>
  );
}

export default App;
