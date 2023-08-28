import React from 'react';
import CheatCard from './CheatCard';

function CardList({ listCard, deleteCard }) {
  if (listCard.length === 0) {
    return <h3>No Git here!</h3>;
  }

  return (
    <>
      {listCard.map((card) => (
        <CheatCard key={card.id} card={card} deleteCard={deleteCard} />
      ))}
    </>
  );
}

export default CardList;
