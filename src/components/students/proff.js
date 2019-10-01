import React, { Component } from 'react';
import './mainCard.css';
import firebase from '../../FireBase/FireStore';    
import Precentes from './precentes';



function addHours(numOfShaot) {
    switch(numOfShaot) {

        case "1":   return "שעה";
        case "2":   return "שעתיים";
        case "3": return "3 שעות";
      
        default:      return "שעה";
    }
}

class Proff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentID: props.studentID,
            shemToar:props.shemToar,
            fName: props.fName,
            sName: props.sName,
            profName: props.profName,
            dayOfMifgash: props.dayOfMifgash,
            hourOfMifgash: props.hourOfMifgash.toDate(),
            timeOfMifgash:props.timeOfMifgash,
            studInTeacherHome: props.studInTeacherHome,
            numOfMifgash:"",
            schoolTeacherName:props.schoolTeacherName,
            schoolTeacherPhone:props.schoolTeacherPhone,
            numOfArived:"",
            isGetPaid:"",
            teachIMG:props.teachIMG,
            lates:"",
            isLoad:false,
            newGrad:"",
            mahatzitGrade:"",
            yearGrade:"",
            isAddButtPresed:false,
            listOfmiktzout: props.listOfmiktzout
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
      }

componentDidMount() {
    let currentComponent = this;
    const db = firebase.firestore();
   const ref = db.collection("listOfStudents").doc(currentComponent.state.studentID);
    ref.get().then(doc => {
        if (doc.exists) {
             const numOfTrace = doc.data().listOfTrace.filter(num =>num.details.sName==currentComponent.state.sName).length;
             const numOfArivedToClass = doc.data().listOfTrace.filter(num =>num.details.sName==currentComponent.state.sName).filter(numOf =>!numOf.isArived).length;
             const numOfLateToClass = doc.data().listOfTrace.filter(num =>num.details.sName==currentComponent.state.sName).filter(numOf =>!numOf.isLate).length;
             const numOfGetPaid = doc.data().listOfTrace.filter(num =>num.details.sName==currentComponent.state.sName).filter(numOf =>numOf.isGetPaid).length;
             this.setState({
                numOfMifgash: numOfTrace,
                numOfArived:numOfArivedToClass,
                lates: numOfLateToClass,
                isGetPaid: numOfGetPaid,
                isLoad: true,
            })  
        } else {
            console.log("No such document!");
        }
    }).catch(error => {
        console.log("Error getting document:", error); 
    }); 
}

handleEdit(e) {
    console.log([e.target])
    this.setState({[e.target.name]: true});
}

handleSave(e) {
    const currentComponent = this;
    let temp = this.state.listOfmiktzout;
    temp[this.props.index].listOfGrades.push(this.state.newGrad);
    const db = firebase.firestore();
    db.collection("listOfStudents").doc(currentComponent.state.studentID).update({
        listOfmiktzout:temp
    }); 
    this.setState({[e.target.name]: false,newGrad:""}); 
}


handleAdd(e) {

}

handleChange(e) {
    this.setState({[e.target.name]: e.target.value}); 
}


handleRemove(e) {

}

render(){
    //console.log("hourOfMifgash", JSON.stringify(this.state.hourOfMifgash));
    //console.log("hourOfMifgash", this.state.hourOfMifgash.toDate().getHours());
    //let hourOfBeg = this.state.hourOfMifgash.toDate().getHours()+":"+(this.state.hourOfMifgash.toDate().getMinutes()==0?"00":this.state.hourOfMifgash.toDate().getMinutes());
    let hourOfBeg = this.state.hourOfMifgash.getHours()+":"+(this.state.hourOfMifgash.getMinutes()==0?"00":this.state.hourOfMifgash.getMinutes());
    return(

        <div className="proffBox">

            <div className="nameAndPhoto">
                <span className="headLineProf">{this.state.shemToar} {this.state.fName} {this.state.sName} - {this.state.profName}</span>
                <img className="profImageStud" src={this.state.teachIMG}/>
            </div>
            <br/><div className="detailsProf">
                <span>יום המפגש: {this.state.dayOfMifgash}'</span>
                <br/><span>שעת המפגש: {hourOfBeg}</span>
                <br/><span>משך המפגש: {addHours(this.state.timeOfMifgash)}</span>
                <br/><span>לומד בבית המורה: {this.state.studInTeacherHome}</span>
                <br/><span>מורה מלמד בביה"ס: {this.state.schoolTeacherName}</span>
                <br/><span>טלפון: {this.state.schoolTeacherPhone}</span>
                <div className="graphButtons">

                {this.state.isAddButtPresed ? 
                (<div className="inpBox">
                        <label>
                        <span  dir="rtl" className="headLinePD"> הכנס ציון: </span>
                            <input
                                required
                                dir="rtl"
                                type="text"
                                name="newGrad"
                                placeholder= "הכנס ציון"
                                value = {this.state.newGrad}
                                onChange={this.handleChange}
                            />
                    </label>
                    
                    <button className="buttonEdit" name="isAddButtPresed" value={this.state.isAddButtPresed} onClick={this.handleSave}>שמור ציון</button><br/>
                    </div>)
                :
                    (<button className="grey darken-3 waves-effect waves-light btn" name="isAddButtPresed" value={this.state.isAddButtPresed} onClick={this.handleEdit}> הוסף ציון חדש</button>)}
                    <br/>
                </div>
                <span>מפגשים שהתקיימו: {this.state.numOfArived} תלושים שניתנו: {this.state.isGetPaid}</span>
            </div>
            <div className="precentage">
                <span>אחוזי הגעה:</span><br/>
                {this.state.isLoad?( <span><Precentes numOfMifgash={this.state.numOfMifgash} numOfMevukash={this.state.numOfArived} /></span>):(<div></div>)}<br/>
                <br/>
                <span>אחוזי הגעה בזמן:</span><br/>
                {this.state.isLoad?( <span><Precentes numOfMifgash={this.state.numOfMifgash} numOfMevukash={this.state.lates} /></span>):(<div></div>)}<br/>
            </div>
         </div>
     )
 }
 
}

export default Proff;