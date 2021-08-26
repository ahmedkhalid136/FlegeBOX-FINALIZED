import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import whymypflegebox from "./components/whymypflegebox/whymypflegebox";
<<<<<<< HEAD
import Contact from "./components/contact/contact";
=======
import Faq from "./components/FAQ/FAQ";
>>>>>>> 02f7676de981ddfb537275a509e27af818f5e675

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>flegebox</title>
        <body>
          <BrowserRouter>
            <Switch>
              <Route path="/homepage" component={Homepage}></Route>
              <Route path="/whymypflegebox" component={whymypflegebox}></Route>
<<<<<<< HEAD
              <Route path="/contact" component={Contact}></Route>
=======
              <Route path="/FAQ" component={Faq}></Route>
>>>>>>> 02f7676de981ddfb537275a509e27af818f5e675
            </Switch>
          </BrowserRouter>
        </body>
      </header>
    </div>
  );
}

export default App;
