import React, { Component } from "react";
import Home from './home.jsx';
import GameAI from './AIMode/ai-mode.jsx';
import Game2P from './2PlayerMode/two-player-mode.jsx'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

class App extends Component {
        render() {
                return (
                  <Router>
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/ai-mode" component={GameAI} />
                      <Route path="/2p-mode" component={Game2P} />
                    </Switch>
                  </Router>
                );
              }
}

export default App;