import React, {Component} from 'react';
import Card from '../components/card.js'

class Deck extends Component {
  constructor(props){
    super(props);
      this.state ={
        deck: []
      }
  }

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

  deal(){
    // slice what's being passed down to card
  }

  render() {
     console.log(this.state.deck)
     return (
       <Card deck={this.state.deck}/>
     )
    // this closes render()
  }
  // this closes class Deck
}
export default Deck;
