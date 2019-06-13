import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Search from "../pages/home/Contents";
import Code from '../pages/code/Contents';
import Insta from '../pages/insta/Contents';
import './App.css';
import Deals from "./Deals";

const App = () => {
  return (
    <div className="app-container">
      <Header/>
      <main id="home-container">
        <Route exact path="/" component={Search}/>
        <Route path="/code" component={Code}/>
        <Route path="/insta" component={Insta}/>
      </main>
    </div>
  )
}

export default App;