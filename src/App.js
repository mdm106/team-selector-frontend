import React from 'react';
import './App.css';

//ReactRouter component imports
import {
  Router,
  Route,
  Switch,
} from "react-router-dom";
// History file imported to use ReactRouter's history functionality
import history from "./history";

//Component imports
import Header from "./components/Header";
import Settings from "./components/Settings";
import Entry from "./components/Entry";
import Selection from "./components/Selection";

let timeHour = new Date().getHours();

const App = () => {
  let timeHour = new Date().getHours();
  let timeDay = "day";
  if(timeHour > 19 || timeHour < 6) {
    timeDay = "night";
  }
  return (
  <Router history={ history }>
    <div className={`background_image ${timeDay}` }>
      <Header />
      <Switch>
        <Route exact path="/">
          <Settings />
        </Route>
        <Route exact path="/name-entry">
          <Entry />
        </Route>
        <Route exact path="/team-selection">
          <Selection />
        </Route>
      </Switch>
      
    </div>
  </Router>
  )
};

export default App;
