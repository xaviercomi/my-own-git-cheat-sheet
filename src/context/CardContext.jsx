import { createContext, useState, useEffect } from 'react';
import { cheatCards } from '../data/cheatCards.js';

export const CardContext = createContext();

export function CardContextProvider(props) {
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
    <CardContext.Provider
      value={{
        listCard,
        createCard,
        deleteCard,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
}
