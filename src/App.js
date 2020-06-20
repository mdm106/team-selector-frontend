import React from 'react';
import './App.css';

//ReactRouter component imports
import {
  Router,
  Route,
} from "react-router-dom";
// History file imported to use ReactRouter's history functionality
import history from "./history";

//Component imports
import Header from "./components/Header";
import Settings from "./components/Settings";

const App = () => (
  <>
    <Router history={ history }>
      <Header />
      <Settings />
    </Router>
  </>
);

export default App;
