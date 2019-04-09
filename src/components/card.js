import React from 'react'

const Card = (props) => {
  console.log("Deck results", props.card)
  return(
    <div className='sidebyside'>
      <img src={`${props.card.image}`}/>
    </div>
  )
  // this closes Card function
}
//<div className='sidebyside'> added so i could make the cards sidebyside
//<img src={`..${this.props.image}`} />
export default Card
