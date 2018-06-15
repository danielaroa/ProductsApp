import React, { Component } from 'react';
import Basic from '../Components/Basic';

class BasicContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user : {}
        };
    }

    componentDidMount() {
        const userOb = {};
        userOb.user_name = "Fede";
        userOb.description = "Trabajo en accenture y tengo 23 años";
        this.setState({
            user : userOb
        });
    }

    render() {

        return (
            <Basic 
                user = { this.state.user }
            />
        );
    }
}

export default BasicContainer;