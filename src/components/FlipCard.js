import React from 'react'
import './flipCard.css'

const FlipCard = () => {
  return (
    <div className='flip-card'>
        <div className='flip-card-inner'> 
            <div className='flip-card-front'>flipCard Front</div>
            <div className='flip-card-back'>flipCard Back</div>
        </div>
    </div>
  )
}

export default FlipCard