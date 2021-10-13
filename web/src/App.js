import './App.css';
import {Button} from "@material-ui/core";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="centered">
              <h1>Test React Build!</h1>
          </div>
          <div class="centered">
          <Button variant="contained" color="primary" align="center">Knap</Button>
          </div>
      </header>
    </div>
  );
}

export default App;
