import React, { useState, useEffect } from "react";
import catboy from "./images/catboy.png";
import catboy1000 from "./images/catboychmurka.png";
import catboy2000 from "./images/catboychmurka2.png";
import catboy3000 from "./images/catboychmurka3.png";

const ScoreBoard = ({ score }) => {
    const [currentImage, setCurrentImage] = useState(catboy);

    useEffect(() => {
        if (score >= 1000 && score < 2000) {
            setCurrentImage(catboy1000);
        } else if (score >= 2000 && score < 3000) {
            setCurrentImage(catboy2000);
        } else if (score >= 3000) {
            setCurrentImage(catboy3000);
        } else {
            setCurrentImage(catboy);
        }
    }, [score]);

  return (
    <div className="score-board">
      <h2>score</h2>
      <h2>{score}</h2>
        <img src={currentImage} alt="catboy" style={{ width: '420px', height: '420px', marginTop: 'auto', marginRight: '-235px'}} />
    </div>
  );
};

export default ScoreBoard;
