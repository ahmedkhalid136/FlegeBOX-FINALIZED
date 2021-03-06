import "./App.css";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import whymypflegebox from "./components/whymypflegebox/whymypflegebox";
import Faq from "./components/FAQ/FAQ";
import contact from "./components/contact/contact";
import Blogdetails from "./components/Blogdetails/Blogdetails";
import Bloglist from "./components/Bloglist/Bloglist";
import FillInfo from "./components/FillInformation/FillInfo";
import Confirmation from "./components/Confirmation/Confirmation";
import Box from "./components/Box/Box";
import CustomBox from "./components/CustomBox/CustomBox";
import {Provider} from 'react-redux';

import store from './store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>flegebox</title>
        <body>
          <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route path="/home" component={Homepage}></Route>
              <Route path="/whymypflegebox" component={whymypflegebox}></Route>
              <Route path="/FAQ" component={Faq}></Route>
              <Route path="/contact" component={contact}></Route>
              <Route path="/Blogdetails" component={Blogdetails}></Route>
              <Route path="/Bloglist" component={Bloglist}></Route>
              <Route path="/Fillinformation" component={FillInfo}></Route>
              <Route path="/confirmation" component={Confirmation}></Route>
              <Route path="/Box" component={Box}></Route>
              <Route path="/CustomBox" component={CustomBox}></Route>
            </Switch>
          </BrowserRouter>
          </Provider>
        </body>
      </header>
    </div>
  );
}

export default App;
