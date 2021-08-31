import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import whymypflegebox from "./components/whymypflegebox/whymypflegebox";
import Faq from "./components/FAQ/FAQ";
import contact from "./components/contact/contact";
import Blogdetails from "./components/Blogdetails/Blogdetails";
import Bloglist from "./components/Bloglist/Bloglist";
import FillInfo from "./components/FillInformation/FillInfo";
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
              <Route path="/FAQ" component={Faq}></Route>
              <Route path="/contact" component={contact}></Route>
              <Route path="/Blogdetails" component={Blogdetails}></Route>
              <Route path="/Bloglist" component={Bloglist}></Route>
              <Route path="/Fillinformation" component={FillInfo}></Route>
            </Switch>
          </BrowserRouter>
        </body>
      </header>
    </div>
  );
}

export default App;
