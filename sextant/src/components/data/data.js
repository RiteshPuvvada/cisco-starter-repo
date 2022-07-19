import React from "react";
import "./data.css"
import Card from '../Card/card.js'

const Data = () => {
    const data = ['Public IP', 'Pylon Data']
    return (
        <div className="container">
            {data.map((data, index) => <Card key={index} title={data} image='https://img.helpnetsecurity.com/wp-content/uploads/2019/06/09094049/cisco1.jpg' body='test me'/>)}
        </div>
    )
}

export default Data
