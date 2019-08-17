import React, { Component } from "react";
import Notifications from './notifications';
import Buttons from './buttons';
import Search from './search';

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m6">
                            <Buttons/>
                        </div>
                        <div className="col s12 m5 offset-m1">
                            <Notifications/>
                        </div>
                    </div>
                    <div className="s6"> 
                        <Search/>
                    </div>
            </div>
        )
    }
}
export default Dashboard;