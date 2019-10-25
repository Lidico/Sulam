import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import firebase from '../../FireBase/FireStore';
import managers from '../auth/managers'

const signedIn =(props) => {

    if(props.name == null)
        return (<div></div>);
    
    let name = props.name.charAt(0);
    let s = props.name.indexOf(' ');
    if(s > 1 && s < props.name.length - 1)
        name += props.name.charAt(s+1);
    return(
        <ul>
            <li><NavLink to='/' className="btn btn-floating pink lightin-1">{name}</NavLink></li>
            <li><div onClick={() => firebase.auth().signOut()} ><NavLink to='/'>התנתק</NavLink></div></li>
            <li><NavLink to='/dashboard'>דף ראשי</NavLink></li>
        </ul>    
    )
}

export default signedIn;