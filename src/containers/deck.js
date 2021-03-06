import React, {Component} from 'react';
import Card from '../components/card.js'

class Deck extends Component {
  constructor(props){
    super(props);
      this.state ={
        deal: [],

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
      if(this.state.deal.length===0){
      fetch(`http://localhost:3000/api/v1/decks/${this.props.id}`)
      .then(resp => resp.json())
      //.then(deck => console.log(deck.data.attributes.cards[0]))
      .then(deck =>
        this.setState({
          deal: deck.data.attributes.deal
        })
      )
    }else{ //update method from back end
      fetch(`http://localhost:3000/api/v1/decks/${this.props.id}/deal`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PUT'
      })
      .then(function(res){ return res.json(); })
      .then(deck =>
        this.setState({
          deal: deck.data.attributes.deal
        })
      )
    }
  }

  checkDeck() { //this saves it from breacking when we run out of cards.
    if(this.state.deal!==null){
    return this.state.deal.map((card) =>{ return <Card key={card.id} card={card}/>})
    }
  }

  render() {
    console.log(this.props)
     return (
       <div>
       <button onClick={() => this.deal(this.props)}>Deal Cards</button>
        <div className='container'>
          {this.checkDeck()}
        </div>
       </div>
     )
    // this closes render()
  }
  // this closes class Deck
}
//<div className='container'> added container so that i could make the cards sidebyside
//<button onClick={() => this.deal(this.props)}>Deal Cards</button>
//{this.props.deck.length===52 ? null : this.state.deal.map((card) =>{ return <Card key={card.id} card={card}/>})}
export default Deck;
