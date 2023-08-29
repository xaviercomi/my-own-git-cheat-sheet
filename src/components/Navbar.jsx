import React from "react";
import { useState, useContext } from "react";
import { CardContext } from "../context/CardContext";
import MagnifyingGlass from "../assets/magnify_glass.svg";

function Navbar() {
  const [description, setDescription] = useState("");
  const [command, setCommand] = useState("");
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(6);
  const { createCard, selectCard } = useContext(CardContext);

  function handleSubmit(e) {
    e.preventDefault();

    setCount(count + 1);

    const newCard = {
      id: count,
      description: description,
      command: command,
    };

    createCard(newCard);

    setDescription("");
    setCommand("");
  }

  function handleSearch(e) {
    e.preventDefault();

    setSearch(e.target.value);

    selectCard(search, e);
  }

  return (
    <>
      <div className="grid grid-cols-1 mx-auto m-5 w-1/2 p-5 bg-gray-800 justify-center items-center rounded-lg">
        <h1 className="flex flex-column items-center justify-center mb-10 text-slate-400 text-2xl">
          My own Git cheat sheet
        </h1>
        <form
          className="flex-column items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            className="rounded bg-slate-300 p-3 mb-2 w-full text-gray-950 placeholder:text-zinc-500"
            placeholder="description..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            autoFocus
          />
          <input
            className="rounded bg-slate-300 p-3 mb-2 w-full text-gray-950 placeholder:text-zinc-500"
            placeholder="command..."
            onChange={(e) => setCommand(e.target.value)}
            value={command}
          />
          <button className="rounded bg-slate-600 p-3 mb-2 w-full font-bold text-slate-950 hover:text-slate-100 hover:bg-slate-500">
            push
          </button>
          <div className="flex flex-row">
            <input
              onChange={handleSearch}
              className="rounded-l-lg h-10 w-full mr-0
                bg-slate-300  
                p-3
               bm-2
                w-96
                text-gray-950
                placeholder:text-zinc-500"
            />
            <img
              className="w-10 h-10 mt-0 bg-slate-300 p-1 rounded-r-lg ml-0"
              src={MagnifyingGlass}
              alt="marnifying glass icon"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Navbar;
