import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <Header
                options={this.props.options}
            />
        );
        
    }
}

class Header extends Component {
    render() {
        return (
            <div className="nav-wrapper">
                <ul>
                    <li>{this.props.options.op1}</li>
                    <li>{this.props.options.op2}</li>
                    <li>{this.props.options.op3}</li>
                </ul>
            </div>
        );

    }
}

export default Navigation;