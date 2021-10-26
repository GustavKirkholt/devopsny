import './App.css';
import About from "./About";
import Home from "./Home";
import Giraffes from "./Giraffes";
import {HashRouter, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar></Navbar>
          <HashRouter>
              <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/about' component={About}/>
                  <Route path='/giraffes' component={Giraffes}/>
              </Switch>
          </HashRouter>
      </header>
    </div>
  );
}

export default App;
