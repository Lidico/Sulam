import React, { Component } from 'react';
import './signIn.css';
import firebase from '../../FireBase/FireStore';
import { Redirect } from 'react-router';
import signedIn from '../layOut/signedIn';
import AddUser from './addUser'
import SigninForm from './signinForm'

class SignIn extends Component {
    state={
        email: '',
        password: '',
        signedIn: false,
        manager: false
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            console.log(user);
            if(!user){
                this.setState({signedIn: false,manager: false})
                return;
            }
            if(user.email === "piskarov@gmail.com")
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
        console.log(this.state)
    }

    SignIn = () => {
        console.log(this.state)
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