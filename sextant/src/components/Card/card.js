import React from 'react';
import './card.css'

const Card = ({title, image, body}) => {
    return (
        <div className='card-container'>
            <div className='img-container'>
                <img src={image} alt='' />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3> {title}</h3>
                </div>
                <div className='card-body'>
                    <p> {body}</p>
                </div>
            </div>
        </div>
    )
}

export default Card