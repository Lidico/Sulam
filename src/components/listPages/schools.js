import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import firebase from '../../FireBase/FireStore';
import { Redirect } from 'react-router';
import './listPage.css';

class Schools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolName:"",
            schoolAdress:"",
            isSubmit: false,
        };

    }
    

    render(){
    
        return(
            <div lassName="project-list section listBlock">
                <h4 className="headline">בחר בית ספר</h4>
                <button className="buttonList">דנמרק</button>
                <button className="buttonListChecked">זיו</button>
                <button className="buttonList">מכללת אורט</button>
                <button className="buttonList">הגמנסיה העברית</button>
                <button className="buttonList">גבעת גונן</button>
            </div>

        )
    }
}
    

export default Schools;


