import React from "react";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";

function CheatCard({ card }) {
  const { deleteCard } = useContext(CardContext);

  return (
    <div className="flex flex-col bg-gray-800 text-white px-4 p-4 rounded-lg content-center justify-center">
      <button
        className="bg-red-500 rounded-md p-1 self-end hover:bg-red-400 m-3"
        onClick={() => deleteCard(card.id)}
      >
        delete
      </button>
      <div>
        <h3 className="text-gray-500">{card.description}</h3>
        <h2 className="text-xl font-bold text-sm border-2 p-2 m-2 rounded bg-gray-700">
          {card.command}
        </h2>
        <div className="flex flex-col">
          <button
            onClick={() => {
              navigator.clipboard.writeText(card.command);
            }}
            className="hover:text-slate-500 self-end p-2 border-2 border-zinc-600 rounded-lg m-3"
          >
            copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheatCard;
