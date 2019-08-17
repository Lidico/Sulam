import React, { Component } from 'react';
import './signIn.css';

class SignIn extends Component {
    state={
        email: '',
        password: ''

    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }
    render(){
        return(
            <div className="container right-align containBox">
                <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">כניסת משתמש</h5>
                        <div className="input-field">
                            <input type="email" id="email" onChange={this.handleChange}/>
                            <label htmlFor="email">דואר אלקטרוני</label>
                        </div>
                        <div className="input-field">
                            <input type="password" id="password" onChange={this.handleChange}/>
                            <label htmlFor="password">סיסמה</label>
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">כניסה</button>
                        </div>
                </form>
            </div>
        )
    }
}

export default SignIn;