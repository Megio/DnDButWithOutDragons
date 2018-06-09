import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Prova from './Prova';
import Bersaglio from './Card';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Prova/>
        <Bersaglio/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App)
