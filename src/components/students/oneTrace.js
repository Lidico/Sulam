
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './mainCard.css';
import firebase from '../../FireBase/FireStore';    
import { firestore } from 'firebase-admin';



class OneTrace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shemToar:props.shemToar,
            fName: props.fName,
            sName: props.sName,
            description: props.description,
            dateOfTrace: props.dateOfTrace,
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
      }

handleChange(e) {
}


handleRemove(e) {
}

render(){

    /*let dateOfMifgash = this.state.dateOfTrace.getDay()+"/"+this.state.dateOfTrace.getMounth()+"/"+this.state.dateOfTrace.getYear();*/
        return(
            <div className="traceBox">
            <span className="dateAndTeacher">15.08.2019 {this.state.shemToar} {this.state.fName} {this.state.sName }</span><br/><span className="contentPD">{this.state.description}</span>
            <div className="btnDel"><Link to="/"><button className="deep-orange waves-effect waves-light btn">מחיקה</button></Link></div>
             <div className="checkBOxes">
                 <p>
                 <label>
                     <input type="checkbox" />
                     <span>לא הגיע לשיעור</span>
                 </label>
                 </p>
                 <p>
                 <label>
                     <input type="checkbox" />
                     <span>איחר</span>
                 </label>
                 </p>
                 <p>
                 <label>
                     <input type="checkbox" />
                     <span>קיבל תלוש</span>
                 </label>
                 </p>
             </div>
         </div>
     )
 }
 
}

export default OneTrace;