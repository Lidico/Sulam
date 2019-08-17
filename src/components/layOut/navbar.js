import React from 'react';
import { Link } from 'react-router-dom';
import SignedIn from './signedIn';
import SignedOut from './signedOut';
import logo from '../../assets/logo.png';
import './navbar.css';

const navBar =() => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo right"><img src={logo} className="logo"></img></Link>
                <SignedIn/>
                <SignedOut/>
            </div>
        </nav>    
    )
}

export default navBar;