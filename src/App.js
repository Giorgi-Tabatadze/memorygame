/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import "./App.css";
import React, { useEffect, useState } from "react";
import cards from "./cards/cards";
import MemoryCard from "./components/memeoryCard";
import ScoreTracker from "./components/scoreTracker";

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
      <ScoreTracker score={score} bestScore={bestScore} />
      <MemoryCard cards={cards} onClick={handleCardSelection} />
    </div>
  );

  return app;
}

export default App;
