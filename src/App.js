import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import "./App.css";
import Snack from "./Snack";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <h1>
            <VendingMachine />
          </h1>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/chips">
                  chips
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/pepsi">
                  pepsi
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/candy">
                  Candy
                </NavLink>
              </li>
            </ul>
          </nav>
        </Route>
        <Route exact path="/chips">
          <Snack snackName="Chips" eatenForm={true} />
        </Route>
        <Route exact path="/Pepsi">
          <Snack
            snackName="Pepsi"
            eatenForm={false}
            msg="To be honest Coke is better."
          />
        </Route>
        <Route exact path="/candy">
          <Snack
            snackName="Candy"
            eatenForm={false}
            msg="Candy... that's pretty vague"
          />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
