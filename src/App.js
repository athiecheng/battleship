import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Navigation, Home, Play, Rules, Freeplay, Normalplay} from "./components"

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/play" exact component={() => <Play />} />
          <Route path="/rules" exact component={() => <Rules />} />
          <Route path = "/play/free-play" exact component={() => <Freeplay />} />
          <Route path = "/play/normal-play" exact component={() => <Normalplay />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
