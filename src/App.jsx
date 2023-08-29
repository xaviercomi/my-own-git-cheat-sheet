import React from "react";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";

function App() {
  return (
    <main className="flex bg-zinc-900 h-full p-10 items-center justify-center">
      <div className="display flex-column container mx-auto items-center justify-center">
        <Navbar />
        <CardList />
      </div>
    </main>
  );
}

export default App;
