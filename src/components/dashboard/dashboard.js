import React, { Component } from "react";
import Notifications from './notifications';
import Buttons from './buttons';
import Search from './search';
import './dashboard.css';
import CheckAuth from '../auth/checkAuth';
import managers from '../auth/managers'
import firebase from '../../FireBase/FireStore';    

class Dashboard extends Component{

    state={
        manager: false,
        signedIn: false
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            console.log(user);
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

    render(){
        return(
           
            <div>
                 <CheckAuth/>
                <div className="halfDash">
                    <div className="textDashBox">
                            <div className="headerDashText">
                                <span className="headerDashTextPrimary">"I Can!"</span>
                                <span className="headerDashTextSub">is 100 times more important than IQ</span>
                                </div>
                        </div>
                </div>
                <div className="secHalfDash">
                <br/>
                <Buttons manager={this.state.manager}/>
            </div>
         </div>
        )
    }
}
export default Dashboard;