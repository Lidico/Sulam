import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from 'react-bootstrap/NavLink';
import firebase from '../../FireBase/FireStore';

const signedIn =(props) => {

    if(props.name == null)
        return (<div></div>);
    
    let name = props.name.charAt(0);
    let s = props.name.indexOf(' ');
    if(s > 1 && s < props.name.length - 1)
        name += props.name.charAt(s+1);
    console.log(name,props.name.length,s);
    return(
        <ul>
            <li><NavLink to='/' className="btn btn-floating pink lightin-1">{name}</NavLink></li>
            <li><div onClick={() => firebase.auth().signOut()} ><NavLink to='/'>התנתק</NavLink></div></li>
            <li><NavLink to='/'>דף ראשי</NavLink></li>
        </ul>    
    )
}

export default signedIn;