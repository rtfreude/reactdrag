import React, { Component } from 'react';
import './App.css';
import Board from './Board';
import { observe } from './Game';

class App extends Component {


  render() {

    observe(knightPosition =>

      return  <Board knightPosition={knightPosition} />

    )
  }
}

export default App;

