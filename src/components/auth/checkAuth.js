
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import firebase from '../../FireBase/FireStore';


class CheckAuth extends Component {

    state={
        signedIn: true,
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            console.log("check", user);
            if(!user)
                this.setState({signedIn: false})
            else
                this.setState({signedIn:true})
        })
    }

render(){
    console.log("signin",this.state.signedIn);
    return(
        <div>
        {this.state.signedIn ? null:(<Redirect to="/signin"></Redirect>)}
        </div>
    )}
}

export default CheckAuth;