import React, {Component} from 'react';
import Card from '../components/card.js'

class Deck extends Component {
  constructor(props){
    super(props);
      this.state ={
        deal: []
      }
  }

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

  deal(props){
    console.log(props)
    let count = 0
    let card_array = []
    while(count < 5){
      card_array.push(props.deck.shift())
      count++
    }
    this.setState({
      deal: card_array
    })
  }

  render() {
     console.log(this.props)
     return (
       <div>
       <button onClick={() => this.deal(this.props)}>Deal Cards</button>
       {this.props.deck.length===52 ? null : this.state.deal.map((card) =>{ return <Card key={card.id} card={card}/>})}
       </div>
     )
    // this closes render()
  }
  // this closes class Deck
}
export default Deck;
