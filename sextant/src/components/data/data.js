import React, { Component } from "react";
import "./data.css"
import Card from '../Card/card.js'
//import PylonConnector from '../PylonConnection.js'
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://localhost:55455');


class AddressDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            ipAddress: null,
            latency: null
        };
        
    }

    componentDidMount() {
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => this.setState({ ipAddress: data.ip }));
            
        // pylon
        client.onmessage = (message) => {
            this.setState({
                latency: new Date().getTime() - message.data
            })
        };
    }
    
    render() {
        return (
            <div className="container">
                <div className="AddressDisplay">
                    <Card image='https://img.helpnetsecurity.com/wp-content/uploads/2019/06/09094049/cisco1.jpg' title={this.state.ipAddress} body='Public Address' />
                    <br />
                    <Card image='https://img.helpnetsecurity.com/wp-content/uploads/2019/06/09094049/cisco1.jpg' title={this.state.latency}
                        body= 'Pylon Packet Latency'>
                    </Card>
                    <br />
                </div>
            </div>
        )
    }
    
}

export default AddressDisplay
