import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const history = useHistory();

  const startGame = () => {
    history.push("/levels");
  };

  return (
    <div className="home-container">
      <h1 className="title">Pociągi! i kotki :3</h1>
        <div className="button-container">
            <button onClick={startGame}>Start</button>
            <button onClick>Ranking</button>
        </div>
    </div>
  );
};

export default Home;
