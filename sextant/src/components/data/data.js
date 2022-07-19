import React, { Component } from "react";
import "./data.css"
import Card from '../Card/card.js'

class AddressDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            ipAddress: null
        };
    }

    componentDidMount() {
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => this.setState({ ipAddress: data.ip }));
    }
    render() {
        return (
            <div className="container">
                <div className="AddressDisplay">
                    <Card image='https://img.helpnetsecurity.com/wp-content/uploads/2019/06/09094049/cisco1.jpg' title = {this.state.ipAddress} body='Public IPv4 Address' />
                    <br />
                    <Card image='https://img.helpnetsecurity.com/wp-content/uploads/2019/06/09094049/cisco1.jpg' title = {this.state.ipAddress} body='Public IPv6 Address' />
                </div>
            </div>
        )
    }
}

export default AddressDisplay
