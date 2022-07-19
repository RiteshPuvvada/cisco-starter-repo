import React, { Component } from 'react';
import './card.css'

class Banner extends Component {
    render() {
        return (
            <div className='card-container'>
                <div className='img-container'>
                    <img src={this.props.image} alt='' />
                </div>
                <div className='card-content'>
                    <div className='card-title'>
                        <h3> {this.props.title}</h3>
                    </div>
                    <div className='card-body'>
                        <p> {this.props.body}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner