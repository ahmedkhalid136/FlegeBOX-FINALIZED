import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>flegebox</title>
        <body>
          <BrowserRouter>
            <Switch>
              <Route path="/Homepage" component={Homepage}></Route>
            </Switch>
          </BrowserRouter>
        </body>
      </header>
    </div>
  );
}

export default App;
