// import React from "react";
// import GameBoard from "./GameBoard";
//
// const Game = ({ match }) => {
//   const { level } = match.params;
//
//   return (
//     <div>
//       <h1>Level {level}</h1>
//       <GameBoard />
//     </div>
//   );
// };
//
// export default Game;

import React from "react";
import GameBoard from "./GameBoard";
import "./Game.css";
import { useHistory } from "react-router-dom";

const Game = ({ match }) => {
    const { level } = match.params;

    const history = useHistory();

    const goBack = () => {
        history.push('/');
    }

    return (
        <div>
            <h1 style={{color: 'rgb(218, 94, 148)'}}>Level {level}</h1>
            <GameBoard />
            <button className="go-back-button" onClick={goBack}>Go back</button>
        </div>
    );
};

export default Game;