import React from 'react'
import './flipCard.css'

const FlipCard = (props) => {

  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <img
            src={props.img}
          />
          <p>{props.frontText}</p>
        </div>
        <div className='flip-card-back'>
          <h4>{props.backTitle}</h4>
          <p>{props.backText}</p>
        </div>
      </div>
    </div>
  )
}

export default FlipCard