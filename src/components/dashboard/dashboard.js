import React, { Component } from "react";
import Notifications from './notifications';
import Buttons from './buttons';
import Search from './search';
import './dashboard.css';

class Dashboard extends Component{
    render(){
        return(
            <div>
                <div className="halfDash">
                    <div className="textDashBox">
                            <div className="headerDashText">
                                <span className="headerDashTextPrimary">"I Can!"</span>
                                <span className="headerDashTextSub">is 100 times more important than IQ</span>
                                </div>
                        </div>
                </div>
                <div className="secHalfDash">
                <Search/>
                <Buttons/>
            </div>
         </div>
        )
    }
}
export default Dashboard;