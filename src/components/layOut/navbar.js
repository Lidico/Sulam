import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignedIn from './signedIn';
import SignedOut from './signedOut';
import logo from '../../assets/logo.png';
import './navbar.css';
import firebase from '../../FireBase/FireStore';    


class navBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            signedIn: true,
            name: ' '
        };
    }

componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
        if(!user)
            this.setState({signedIn: false})
        else
            this.setState({signedIn:true,name:user.displayName})
    })
}
    render(){
    
        return(
            <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo right"><img src={logo} className="logo"></img></Link>
               {this.state.signedIn? <div><SignedIn name={this.state.name}/></div> : (<SignedOut/>)}
            </div>
        </nav>    

        )
    }
}
    

export default navBar;