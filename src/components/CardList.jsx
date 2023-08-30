import React from "react";
import CheatCard from "./CheatCard";
import { CardContext } from "../context/CardContext";
import { useContext } from "react";

function CardList() {
  const { listCard } = useContext(CardContext);

  if (listCard.length === 0) {
    return (
      <h3 className="flex text-slate-500 text-lg items-center justify-center">
        No Git here!
      </h3>
    );
  }

  return (
    <main>
      <div
        key={listCard.lenght}
        className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-2"
      >
        {listCard.map((card) => (
          <CheatCard key={card.id} card={card} />
        ))}
      </div>
    </main>
  );
}

export default CardList;
