import './App.css';
import {Button} from "@material-ui/core";
import Navbar from "./Navbar";
import {HashRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar></Navbar>
          <HashRouter>
              <Route path="/home">
          <div className="centered">
              <h1>Test React Build!</h1>
          </div>
          <div class="centered">
          <Button variant="contained" color="primary" align="center">Knap</Button>
          </div>
              </Route>
              <Route path="/about">
                  <div class="centered">
                  <h1>This is the about page!</h1>
                  </div>
              </Route>
          </HashRouter>
      </header>
    </div>
  );
}

export default App;
