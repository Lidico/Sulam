import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from 'react-bootstrap/NavLink';
import firebase from '../../FireBase/FireStore';

const signedIn =() => {
    return(
        <ul>
            <li><NavLink to='/' className="btn btn-floating pink lightin-1">GT</NavLink></li>
            <li><div onClick={() => firebase.auth().signOut()} ><NavLink to='/'>התנתק</NavLink></div></li>
            <li><NavLink to='/'>דף ראשי</NavLink></li>
        </ul>    
    )
}

export default signedIn;