/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line no-unused-vars
import React from "react";

function ScoreTracker(props) {
  // eslint-disable-next-line no-unused-vars
  const { score, bestScore } = props;

  const scoreBoard = (
    <div className="scoreBoard">
      <p>current score: {score}</p>
      <p>best score: {bestScore}</p>
    </div>
  );

  return scoreBoard;
}

export default ScoreTracker;
