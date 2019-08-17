import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from 'react-bootstrap/NavLink';

const signedOut =() => {
    return(
        <ul>
            <li><NavLink to='/'>? אינך מורשה להכנס</NavLink></li>
        </ul>    
    )
}

export default signedOut;