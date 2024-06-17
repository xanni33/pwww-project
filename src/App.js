import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Levels from "./components/Levels";
import Game from "./components/Game";
import "./App.css";

const App = () => {
  return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/levels" component={Levels} />
            <Route path="/game/:level" component={Game} />
          </Switch>
        </div>
      </Router>
  );
};

export default App;
