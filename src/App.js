import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MainPage from './screens/MainPage';
import React, { Component } from 'react'
import TestPage from './screens/TestPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
                        
            <main>
                <Route path="/" component={MainPage} exact></Route>
                <Route path="/test" component={TestPage} exact></Route>
            </main>
        </div>
    </BrowserRouter>
    )
  }
}