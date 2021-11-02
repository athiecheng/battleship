import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Navigation, Home, Play, Rules} from "./components"

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/play" exact component={() => <Play />} />
          <Route path="/rules" exact component={() => <Rules />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
