import { createContext, useState, useEffect } from "react";
import { cheatCards } from "../data/cheatCards.js";

export const CardContext = createContext();

export function CardContextProvider(props) {
  const [listCard, setListCard] = useState([]);

  useEffect(() => {
    setListCard(cheatCards);
  }, []);

  function createCard(newCard) {
    setListCard([...listCard, newCard]);
  }

  function deleteCard(cardId) {
    setListCard(listCard.filter((card) => card.id !== cardId));
  }

  function selectCard(userSearch, event) {
    if (event.target.value === "") {
      setListCard(cheatCards);
    } else {
      setListCard(
        listCard.filter((card) => {
          return card.description
            .toLowerCase()
            .includes(userSearch.toLowerCase());
        })
      );
    }
  }

  return (
    <CardContext.Provider
      value={{
        listCard,
        createCard,
        deleteCard,
        selectCard,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
}
