import React, { Component } from 'react';
import './Basic.css';

class Basic extends Component {
    render() {
        return (
            <article className="user-profile">
                <header>
                    <h1>{ this.props.user.user_name }</h1>
                </header>
                <main>
                    <p>{ this.props.user.description }</p>
                </main>
            </article>
        );
    }
}

export default Basic; 