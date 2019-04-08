import React, { Component } from 'react';

import Deck from './containers/deck.js'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.state ={
        deck: [],
      }
  }

  // original deck
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/decks/new')
    .then(resp => resp.json())
    //.then(deck => console.log(deck.data.attributes.cards[0]))
    .then(deck =>
      this.setState({
        deck: deck.data.attributes.cards
      })
    )
  }

  //new deck
  handleClick(){
    fetch('http://localhost:3000/api/v1/decks/new')
    .then(resp => resp.json())
    .then(deck =>
      this.setState({
        deck: deck.data.attributes.cards
      })
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={()=>this.handleClick()}>New Deck</button>
        <Deck deck={this.state.deck}/>
      </div>
    );
  }
}

export default App;
