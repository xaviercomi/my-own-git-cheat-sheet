import React from 'react';
import { useContext } from 'react';
import { CardContext } from '../context/CardContext';

function CheatCard({ card }) {
  const { deleteCard } = useContext(CardContext);

  return (
    <div className='container-card-list'>
      <button onClick={() => deleteCard(card.id)}>delete</button>
      <div key='props.key' className='card'>
        <h3>{card.description}</h3>
        <h2>{card.command}</h2>
      </div>
    </div>
  );
}

export default CheatCard;
