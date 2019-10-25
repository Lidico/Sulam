import React, { Component } from 'react';
import './signIn.css';
import firebase from '../../FireBase/FireStore';
import { Redirect } from 'react-router';
import signedIn from '../layOut/signedIn';
import AddUser from './addUser'
import SigninForm from './signinForm'
import managers from './managers'

class SignIn extends Component {
    state={
        email: '',
        password: '',
        signedIn: false,
        manager: false
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(!user){
                this.setState({signedIn: false,manager: false})
                return;
            }
            if(managers.includes(user.email))
                this.setState({manager:true})
            else
                this.setState({signedIn:true})
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }

    SignIn = () => {

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode);
            alert(errorMessage);
          });
    }
 
    createUser = ()=> {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((user)=>{
            user.user.updateProfile({
                displayName: this.state.displayName
              }).then(()=>{
                    window.location.reload();
              })
            
           })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode);
            alert(errorMessage);
          });
        
    }
    render(){

        return(
            <div className="container right-align containBox">
            {this.state.signedIn ? (<Redirect to="/"></Redirect>):null}

                {this.state.manager ? 
                null
                :
                (<SigninForm handleChange={this.handleChange} SignIn={this.SignIn}/>)
                }

                {this.state.manager ? 
                (
                <AddUser handleChange={this.handleChange} createUser={this.createUser}/>
                )
                :
                null
                }
            </div>
        )
    }
}

export default SignIn;