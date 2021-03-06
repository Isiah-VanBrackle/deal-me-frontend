import React, { Component } from 'react';

import Deck from './containers/deck.js'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.state ={
        id: ''
      }
  }
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/decks/new', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    .then((res) => res.json())
    .then(deck =>
      this.setState({
        id: deck.data.id
      })
    )
  }

  // original deck
  // componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/decks/new')
  //   .then(resp => resp.json())
  //   //.then(deck => console.log(deck.data.attributes.cards[0]))
  //   .then(deck =>
  //     this.setState({
  //       deck: deck.data.attributes.cards
  //     })
  //   )
  // }

  //new deck
  handleClick(){
    fetch('http://localhost:3000/api/v1/decks/new', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    .then((res) => res.json())
    .then(deck =>
      this.setState({
        id: deck.data.id
      })
    )
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <button onClick={()=>this.handleClick()}>New Deck</button>
        <Deck id={this.state.id}/>
      </div>
    );
  }
}

export default App;
