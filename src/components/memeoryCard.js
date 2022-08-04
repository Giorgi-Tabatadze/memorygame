/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line no-unused-vars
import React from "react";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function MemoryCard(props) {
  // eslint-disable-next-line no-unused-vars
  const { cards, onClick } = props;

  shuffleArray(cards);

  const memoryCard = (
    <div className="cards-container">
      {cards.map((card) => {
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div className="card" data-id={card.id} onClick={onClick}>
            <img src={card.image} alt={card.text} />
            <p>{card.text}</p>
          </div>
        );
      })}
    </div>
  );

  return memoryCard;
}

export default MemoryCard;
