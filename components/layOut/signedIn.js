import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from 'react-bootstrap/NavLink';

const signedIn =() => {
    return(
        <ul>
            <li><NavLink to='/' className="btn btn-floating pink lightin-1">GT</NavLink></li>
            <li><NavLink to='/'>התנתק</NavLink></li>
            <li><NavLink to='/'>דף ראשי</NavLink></li>
        </ul>    
    )
}

export default signedIn;