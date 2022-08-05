/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import "./App.css";
import React, { useEffect, useState } from "react";
import cards from "./cards/cards";
import MemoryCard from "./components/memeoryCard";
import ScoreTracker from "./components/scoreTracker";
import rickandmortylogo from "./cards/img/rick-and-morty-logo.75509f2e.png";

function App(props) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  const cardClicked = (id) => {
    // eslint-disable-next-line prefer-destructuring
    console.log(id);
    setSelectedCards([...selectedCards, id]);
    setScore(score + 1);
  };
  const resetGame = () => {
    setSelectedCards([]);
    setScore(0);
  };

  const handleCardSelection = (event) => {
    const id = Number(event.currentTarget.dataset.id);
    if (selectedCards.includes(id)) {
      resetGame();
      return;
    }
    cardClicked(id);
  };

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score]);

  const app = (
    <div className="App">
      <div className="header">
        <p className="rules">
          How to Play:{" "}
          <p>
            Get points for choosing a card, but don't click on the same card
            more than once!
          </p>
        </p>
        <img
          className="logo"
          src={rickandmortylogo}
          alt="Rick and Morty Logo"
        />
        <ScoreTracker score={score} bestScore={bestScore} />
      </div>
      <MemoryCard cards={cards} onClick={handleCardSelection} />
    </div>
  );

  return app;
}

export default App;
