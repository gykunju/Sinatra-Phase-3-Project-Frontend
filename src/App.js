import {  Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Gameplay from "./components/Gameplay";
import Favorites from "./components/Favorites";
import Companies from "./components/Companies";
import { useState } from "react";

function App() {
  const baseURL = "http://localhost:9292"


  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/favorites">
          <Favorites baseURL={baseURL}/>
        </Route>
        <Route path="/gameplay">
          <Gameplay baseURL={baseURL}/>
        </Route>
        <Route path="/companies">
          <Companies baseURL={baseURL}/>
        </Route>
        <Route path="/">
          <Home baseURL={baseURL}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

