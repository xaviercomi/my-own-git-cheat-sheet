import React from 'react';
import CheatCard from './CheatCard';
import { CardContext } from '../context/CardContext';
import { useContext } from 'react';

function CardList() {
  const { listCard } = useContext(CardContext);

  if (listCard.length === 0) {
    return <h3>No Git here!</h3>;
  }

  return (
    <>
      {listCard.map((card) => (
        <CheatCard key={card.id} card={card} />
      ))}
    </>
  );
}

export default CardList;
