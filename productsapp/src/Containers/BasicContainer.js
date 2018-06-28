import React, { Component } from 'react';
import Basic from '../Components/Basic';
import axios from 'axios';


class BasicContainer extends Component {
    constructor(props) {
        super(props);
            this.state = {
                characters : [{name:'dani',description: 'prueba'}],
                loading: true
            };
    }

    componentWillMount() {
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?orderBy=modified&limit=50&apikey=960e9b35a6d31a401857a9a792df326f
`, {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })    
        .then((res) => {
            this.setState({
                characters : res.data.data.results,
                loading: false
            });        
        })
        .catch((err) => {
            console.error(err);
        });
    }

    render() {
        //console.log(this.state.characters);
        return (
            this.state.loading? 'loading...' : 
            <Basic 
            characters = { this.state.characters }
            />
        );
    }
}

export default BasicContainer;