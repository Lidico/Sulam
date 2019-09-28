
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import firebase from '../../FireBase/FireStore';


class CheckAuth extends Component {

    state={
        signedIn: true,
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(!user)
                this.setState({signedIn: false})
            else
                this.setState({signedIn:true})
        })
    }

render(){
    return(
        <div>
        {this.state.signedIn ? null:(<Redirect to="/signin"></Redirect>)}
        </div>
    )}
}

export default CheckAuth;