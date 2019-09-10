import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './form.css';
import firebase from '../../FireBase/FireStore';    
import { firestore } from 'firebase-admin';

function addHours(numOfShaot) {
    switch(numOfShaot) {

        case "1":   return 1;
        case "2":   return 2;
        case "3": return 3;
      
        default:      return 1;
    }
}

class Miktzua extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profName: props.profName,
            shemToar:props.shemToar,
            fName: props.fName,
            sName: props.sName,
            hourOfMifgash: props.hourOfMifgash,
            numOfShaot: props.numOfShaot,
            dayOfMifgash: props.dayOfMifgash
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
      }

handleChange(e) {
}


handleRemove(e) {
}

render(){
 
  
    let hourOfBeg = this.state.hourOfMifgash.getHours()+":"+(this.state.hourOfMifgash.getMinutes()==0?"00":this.state.hourOfMifgash.getMinutes());
    let hourOfEnd = (this.state.hourOfMifgash.getHours())+addHours(this.state.numOfShaot)+":"+(this.state.hourOfMifgash.getMinutes()==0?"00":this.state.hourOfMifgash.getMinutes());
    console.log(hourOfBeg)
    console.log(hourOfEnd)
        return(
            <div className="profBox">
                <div className="profLine">שיעור {this.state.profName} עם {this.state.shemToar} {this.state.fName} {this.state.sName }</div><br/>
                <div className="profLine">בין השעות {hourOfBeg}-{hourOfEnd} כל יום {this.state.dayOfMifgash}'</div><br/>
                <div className="btnDel"><button className="deep-orange waves-effect waves-light btn">מחיקה</button></div>
            </div>
        )
    }
}

export default Miktzua;