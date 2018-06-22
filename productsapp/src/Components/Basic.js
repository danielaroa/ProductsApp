import React, { Component } from 'react';
import './Basic.css';

class Basic extends Component {
    render() {
        return (
            <div className="characters-layout">
                {this.props.characters.map(result => 
                    <div key={result.id} className="character-container">
                        <div className="character-title">
                            <h1>{ result.name }</h1>
                        </div>
                        <div className="character-information_img">
                            <img src={ result.thumbnail['path'] + '.jpg' } />
                        </div>
                        <div className="character-information_description">
                            <p>{result.description }</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Basic; 