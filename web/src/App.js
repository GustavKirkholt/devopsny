import './styling/App.css';
import About from "./components/About";
import Home from "./components/Home";
import Giraffes from "./components/Giraffes";
import Search from "./Search";
import {HashRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
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
                  <Route path='/search' component={Search}/>
                  <Route path='/giraffes' component={Giraffes}/>
                  <Route render={()=><h1>404</h1>}/>
              </Switch>
          </HashRouter>
      </header>
    </div>
  );
}

export default App;
