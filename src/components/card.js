import React, {Fragment} from 'react'

const Card = (props) => {
  console.log("Deck results", props.card)
  return(
    <Fragment>
      {props.card.card_type}
    </Fragment>
  )
  // ^props.card.image
  // this closes Card function
}
//<img src={`..${this.props.image}`} />
export default Card
