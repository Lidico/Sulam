
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './mainCard.css';
import firebase from '../../FireBase/FireStore';    
import { firestore } from 'firebase-admin';



class OneTrace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: props.key,
            studentID: props.studentID,
            shemToar:props.shemToar,
            fName: props.fName,
            sName: props.sName,
            dateOfTrace: props.dateOfTrace,
            description: props.description,
            dateOfTrace: props.dateOfTrace,
            isPaid: props.isPaid,
            isLate: props.isLate,
            isntArived: props.isntArived
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
      }

handleChange(e) {
    if(!e.target.name){
        console.log(this.state.key);
        this.setState({[e.target.name]: true});
        const db = firebase.firestore();
        const ref = db.collection("listOfStudents").doc(this.state.studentID);
        ref.doc.data().listOfTrace[0].update({
            [e.target.name]:true
        })
        
         
    }
    else {
        this.setState({[e.target.name]: false});
    }
}


handleRemove(e) {
}

render(){
    console.log(this.state.key);
    let dateOfMifgash = this.state.dateOfTrace.toDate().getDate()+"/"+(this.state.dateOfTrace.toDate().getMonth()+1)+"/"+this.state.dateOfTrace.toDate().getFullYear();
        return(
            <div className="traceBox">
            <span className="dateAndTeacher">{dateOfMifgash} {this.state.shemToar} {this.state.fName} {this.state.sName }</span><br/><span className="contentPD desc">{this.state.description}</span>
            <div className="btnDel"><button className="deep-orange waves-effect waves-light btn">מחיקה</button></div>
             <div className="checkBOxes">
                 <p>
                 <label>
                     <input type="checkbox" name="isntArived" value="false" onClick={this.handleChange} />
                     <span>לא הגיע לשיעור</span>
                 </label>
                 </p>
                 <p>
                 <label>
                     <input type="checkbox" name="isLate" value="false" onClick={this.handleChange} />
                     <span>איחר</span>
                 </label>
                 </p>
                 <p>
                 <label>
                     <input type="checkbox" name="isGetPaid" value="false" onClick={this.handleChange} />
                     <span>קיבל תלוש</span>
                 </label>
                 </p>
             </div>
         </div>
     )
 }
 
}

export default OneTrace;
