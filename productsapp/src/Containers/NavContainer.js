import React, { Component } from 'react';
import Navigation from '../Components/Navigation';

class NavContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            MenuOptions: {}
        }
    }
    componentDidMount() {
        const opt = {};
        opt.op1 = 'Inicio';
        opt.op2 = 'Buscar';
        opt.op3 = 'Profile';
        this.setState ({
            MenuOptions : opt
        });
    }
    render() {
        return (
            <Navigation options={this.state.MenuOptions} />
        );
    }   

}
export default NavContainer;