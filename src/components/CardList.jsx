import React from "react";
import CheatCard from "./CheatCard";
import { CardContext } from "../context/CardContext";
import { useContext } from "react";

function CardList() {
  const { listCard } = useContext(CardContext);

  if (listCard.length === 0) {
    return <h3 className="text-slate-300">No Git here!</h3>;
  }

  return (
    <main>
      <div key={listCard.lenght} className="grid grid-cols-3 gap-2">
        {listCard.map((card) => (
          <CheatCard key={card.id} card={card} />
        ))}
      </div>
    </main>
  );
}

export default CardList;
