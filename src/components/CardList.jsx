import React from 'react';
import '../styles/cardList.css';

function CardList({ listCard }) {
  if (listCard.length === 0) {
    return <h3>No Git here!</h3>;
  }

  return (
    <>
      {listCard.map((card) => (
        <container className='container-card-list'>
          <div key={card.id} className='card'>
            <h3>{card.description}</h3>
            <h2>{card.command}</h2>
          </div>
        </container>
      ))}
    </>
  );
}
export default CardList;
