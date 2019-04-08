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
  //   fetch('http://localhost:3000/api/v1/decks/new', {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'POST'
  //   })
  //   .then(function(res){ return res.json(); })
  //   .then(deck => console.log(deck))
  // }

  deal(props){
    //show method from back end
     // if(this.state.deal.length===0){
      fetch(`http://localhost:3000/api/v1/decks/${this.props.id}`)
      .then(resp => resp.json())
      //.then(deck => console.log(deck.data.attributes.cards[0]))
      .then(deck => console.log(deck)
        // this.setState({
        //   deal: deck.data.attributes.deal
        // })
      )
    // }else{ //update method from back end
    //   fetch(`http://localhost:3000/api/v1/decks/${this.props.id}/deal`, {
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     method: 'PUT'
    //   })
    //   .then(function(res){ return res.json(); })
    //   .then(deck =>
    //     this.setState({
    //       deal: deck.data.attributes.deal
    //     })
    //   )
    // }

  }

  // deal(props){
  //   console.log(props)
  //   let count = 0
  //   let card_array = []
  //   while(count < 5){
  //     card_array.push(props.deck.shift())
  //     count++
  //   }
  //   this.setState({
  //     deal: card_array
  //   })
  // }

  render() {
     return (
       <div>
       <button onClick={() => this.deal(this.props)}>Deal Cards</button>
       </div>
     )
    // this closes render()
  }
  // this closes class Deck
}
//<button onClick={() => this.deal(this.props)}>Deal Cards</button>
//{this.props.deck.length===52 ? null : this.state.deal.map((card) =>{ return <Card key={card.id} card={card}/>})}
export default Deck;
